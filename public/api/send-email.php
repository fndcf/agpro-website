<?php
/**
 * AgPro International - Contact Form Email Handler (SMTP Version)
 *
 * This script handles contact form submissions and sends emails via SMTP.
 * More reliable than PHP mail() function on shared hosting.
 */

// CORS headers for Angular app
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST.'
    ]);
    exit();
}

// ============================================
// CONFIGURATION - Update these values
// ============================================
$config = [
    // SMTP Settings for HostGator
    'smtp_host' => 'mail.agprointernational.com',  // or 'localhost' on HostGator
    'smtp_port' => 465,                             // 465 for SSL, 587 for TLS
    'smtp_secure' => 'ssl',                         // 'ssl' or 'tls'
    'smtp_auth' => true,

    // SMTP Authentication - USE YOUR CPANEL EMAIL CREDENTIALS
    'smtp_username' => 'noreply@agprointernational.com',
    'smtp_password' => 'SUA_SENHA_AQUI',  // <-- SUBSTITUA PELA SENHA DO EMAIL

    // Email address that will receive the contact form submissions
    'to_email' => 'fernando.carvalhof@hotmail.com',  // <-- SEU EMAIL PARA RECEBER

    // Email address shown as the sender
    'from_email' => 'noreply@agprointernational.com',
    'from_name' => 'AgPro International',

    // Company name for email subject
    'company_name' => 'AgPro International',

    // Enable email sending (set to false for testing)
    'send_email' => true,

    // Rate limiting: max requests per IP per hour
    'rate_limit' => 10,

    // Log file path (optional, set to null to disable)
    'log_file' => __DIR__ . '/contact_log.txt'
];

// ============================================
// SIMPLE SMTP CLASS (No external dependencies)
// ============================================
class SimpleSMTP {
    private $socket;
    private $host;
    private $port;
    private $secure;
    private $username;
    private $password;
    private $timeout = 30;
    private $debug = false;
    private $lastError = '';

    public function __construct($host, $port, $secure, $username, $password) {
        $this->host = $host;
        $this->port = $port;
        $this->secure = $secure;
        $this->username = $username;
        $this->password = $password;
    }

    public function getLastError() {
        return $this->lastError;
    }

    private function connect() {
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            ]
        ]);

        $protocol = ($this->secure === 'ssl') ? 'ssl://' : '';
        $this->socket = @stream_socket_client(
            $protocol . $this->host . ':' . $this->port,
            $errno,
            $errstr,
            $this->timeout,
            STREAM_CLIENT_CONNECT,
            $context
        );

        if (!$this->socket) {
            $this->lastError = "Connection failed: $errstr ($errno)";
            return false;
        }

        stream_set_timeout($this->socket, $this->timeout);
        $response = $this->getResponse();

        if (substr($response, 0, 3) !== '220') {
            $this->lastError = "Invalid greeting: $response";
            return false;
        }

        return true;
    }

    private function sendCommand($command, $expectedCode = null) {
        fwrite($this->socket, $command . "\r\n");
        $response = $this->getResponse();

        if ($expectedCode && substr($response, 0, 3) !== $expectedCode) {
            $this->lastError = "Command failed: $command -> $response";
            return false;
        }

        return $response;
    }

    private function getResponse() {
        $response = '';
        while ($line = fgets($this->socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) === ' ') break;
        }
        return trim($response);
    }

    public function send($from, $fromName, $to, $subject, $htmlBody, $replyTo = null) {
        // Connect
        if (!$this->connect()) {
            return false;
        }

        // EHLO
        $hostname = gethostname() ?: 'localhost';
        if (!$this->sendCommand("EHLO $hostname", '250')) {
            $this->close();
            return false;
        }

        // STARTTLS if using TLS
        if ($this->secure === 'tls') {
            if (!$this->sendCommand("STARTTLS", '220')) {
                $this->close();
                return false;
            }
            stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
            if (!$this->sendCommand("EHLO $hostname", '250')) {
                $this->close();
                return false;
            }
        }

        // AUTH LOGIN
        if (!$this->sendCommand("AUTH LOGIN", '334')) {
            $this->close();
            return false;
        }

        if (!$this->sendCommand(base64_encode($this->username), '334')) {
            $this->close();
            return false;
        }

        if (!$this->sendCommand(base64_encode($this->password), '235')) {
            $this->close();
            return false;
        }

        // MAIL FROM
        if (!$this->sendCommand("MAIL FROM:<$from>", '250')) {
            $this->close();
            return false;
        }

        // RCPT TO
        if (!$this->sendCommand("RCPT TO:<$to>", '250')) {
            $this->close();
            return false;
        }

        // DATA
        if (!$this->sendCommand("DATA", '354')) {
            $this->close();
            return false;
        }

        // Build message
        $boundary = md5(time());
        $headers = [
            "From: $fromName <$from>",
            "To: $to",
            "Subject: $subject",
            "MIME-Version: 1.0",
            "Content-Type: text/html; charset=UTF-8",
            "X-Mailer: AgPro-Contact-Form/1.0"
        ];

        if ($replyTo) {
            $headers[] = "Reply-To: $replyTo";
        }

        $message = implode("\r\n", $headers) . "\r\n\r\n" . $htmlBody . "\r\n.";

        if (!$this->sendCommand($message, '250')) {
            $this->close();
            return false;
        }

        // QUIT
        $this->sendCommand("QUIT");
        $this->close();

        return true;
    }

    private function close() {
        if ($this->socket) {
            fclose($this->socket);
            $this->socket = null;
        }
    }
}

// ============================================
// RATE LIMITING (Simple file-based)
// ============================================
function checkRateLimit($config) {
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $rateLimitFile = sys_get_temp_dir() . '/agpro_rate_' . md5($ip);

    $requests = [];
    if (file_exists($rateLimitFile)) {
        $requests = json_decode(file_get_contents($rateLimitFile), true) ?: [];
    }

    // Remove requests older than 1 hour
    $oneHourAgo = time() - 3600;
    $requests = array_filter($requests, fn($timestamp) => $timestamp > $oneHourAgo);

    if (count($requests) >= $config['rate_limit']) {
        return false;
    }

    // Add current request
    $requests[] = time();
    file_put_contents($rateLimitFile, json_encode($requests));

    return true;
}

// Check rate limit
if (!checkRateLimit($config)) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'message' => 'Too many requests. Please try again later.'
    ]);
    exit();
}

// ============================================
// GET AND VALIDATE INPUT
// ============================================
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON data.'
    ]);
    exit();
}

// Required fields validation
$requiredFields = ['fullName', 'email', 'description'];
$missingFields = [];

foreach ($requiredFields as $field) {
    if (empty($data[$field])) {
        $missingFields[] = $field;
    }
}

if (!empty($missingFields)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Missing required fields: ' . implode(', ', $missingFields)
    ]);
    exit();
}

// Validate email format
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email address.'
    ]);
    exit();
}

// ============================================
// SANITIZE INPUT
// ============================================
function sanitize($value) {
    if (!is_string($value)) return '';
    return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$formData = [
    'fullName' => sanitize($data['fullName'] ?? ''),
    'company' => sanitize($data['company'] ?? ''),
    'email' => filter_var($data['email'], FILTER_SANITIZE_EMAIL),
    'phone' => sanitize($data['phone'] ?? ''),
    'timeline' => sanitize($data['timeline'] ?? ''),
    'location' => sanitize($data['location'] ?? ''),
    'description' => sanitize($data['description'] ?? ''),
    'source' => sanitize($data['source'] ?? '')
];

// ============================================
// BUILD EMAIL
// ============================================
$timelineLabels = [
    'urgent' => 'Urgent (within 30 days)',
    'short' => 'Short-term (1-3 months)',
    'medium' => 'Medium-term (3-6 months)',
    'long' => 'Long-term (6+ months)'
];

$sourceLabels = [
    'google' => 'Google search',
    'referral' => 'Client referral',
    'trade-show' => 'Industry trade show',
    'website' => 'Company website',
    'social-media' => 'Social media',
    'advertisement' => 'Advertisement',
    'other' => 'Other'
];

$subject = "[{$config['company_name']}] New Contact Form Submission from {$formData['fullName']}";

$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a365d; color: white; padding: 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a365d; }
        .value { margin-top: 5px; }
        .description { background: white; padding: 15px; border-left: 4px solid #CCAA77; margin-top: 10px; }
        .footer { padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .gold { color: #CCAA77; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>{$config['company_name']}</h1>
            <p>New Contact Form Submission</p>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Full Name:</div>
                <div class='value'>{$formData['fullName']}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'><a href='mailto:{$formData['email']}'>{$formData['email']}</a></div>
            </div>";

if (!empty($formData['company'])) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Company:</div>
                <div class='value'>{$formData['company']}</div>
            </div>";
}

if (!empty($formData['phone'])) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Phone:</div>
                <div class='value'>{$formData['phone']}</div>
            </div>";
}

if (!empty($formData['location'])) {
    $emailBody .= "
            <div class='field'>
                <div class='label'>Location:</div>
                <div class='value'>{$formData['location']}</div>
            </div>";
}

if (!empty($formData['timeline'])) {
    $timelineDisplay = $timelineLabels[$formData['timeline']] ?? $formData['timeline'];
    $emailBody .= "
            <div class='field'>
                <div class='label'>Timeline:</div>
                <div class='value'>{$timelineDisplay}</div>
            </div>";
}

if (!empty($formData['source'])) {
    $sourceDisplay = $sourceLabels[$formData['source']] ?? $formData['source'];
    $emailBody .= "
            <div class='field'>
                <div class='label'>How did they hear about us:</div>
                <div class='value'>{$sourceDisplay}</div>
            </div>";
}

$emailBody .= "
            <div class='field'>
                <div class='label'>Project Description:</div>
                <div class='description'>" . nl2br($formData['description']) . "</div>
            </div>
        </div>
        <div class='footer'>
            <p>This email was sent from the {$config['company_name']} website contact form.</p>
            <p>Submitted on: " . date('F j, Y \a\t g:i A T') . "</p>
            <p>IP Address: {$_SERVER['REMOTE_ADDR']}</p>
        </div>
    </div>
</body>
</html>
";

// ============================================
// SEND EMAIL VIA SMTP
// ============================================
$success = false;
$errorMessage = '';

if ($config['send_email']) {
    $smtp = new SimpleSMTP(
        $config['smtp_host'],
        $config['smtp_port'],
        $config['smtp_secure'],
        $config['smtp_username'],
        $config['smtp_password']
    );

    $replyTo = "{$formData['fullName']} <{$formData['email']}>";

    $success = $smtp->send(
        $config['from_email'],
        $config['from_name'],
        $config['to_email'],
        $subject,
        $emailBody,
        $replyTo
    );

    if (!$success) {
        $errorMessage = 'Failed to send email: ' . $smtp->getLastError();
    }
} else {
    // Testing mode - simulate success
    $success = true;
}

// ============================================
// LOG SUBMISSION (optional)
// ============================================
if ($config['log_file']) {
    $logEntry = date('Y-m-d H:i:s') . " | " .
                $_SERVER['REMOTE_ADDR'] . " | " .
                ($success ? 'SUCCESS' : 'FAILED') . " | " .
                $formData['email'] . " | " .
                $formData['fullName'] .
                ($success ? '' : " | Error: $errorMessage") . "\n";

    @file_put_contents($config['log_file'], $logEntry, FILE_APPEND | LOCK_EX);
}

// ============================================
// SEND RESPONSE
// ============================================
if ($success) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Your message has been sent successfully. We will contact you soon.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $errorMessage ?: 'Failed to send email. Please try again later.'
    ]);
}
