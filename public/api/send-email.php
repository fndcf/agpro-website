<?php
/**
 * AgPro International - Contact Form Email Handler
 *
 * This script handles contact form submissions and sends emails.
 * It should be deployed to the HostGator server at /api/send-email.php
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
    // Email address that will receive the contact form submissions
    'to_email' => 'contact@agprointernational.com',

    // Email address shown as the sender (use your domain email)
    'from_email' => 'noreply@agprointernational.com',

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

// Plain text version
$plainTextBody = "
{$config['company_name']} - New Contact Form Submission
" . str_repeat('=', 50) . "

Full Name: {$formData['fullName']}
Email: {$formData['email']}
" . (!empty($formData['company']) ? "Company: {$formData['company']}\n" : "") . "
" . (!empty($formData['phone']) ? "Phone: {$formData['phone']}\n" : "") . "
" . (!empty($formData['location']) ? "Location: {$formData['location']}\n" : "") . "
" . (!empty($formData['timeline']) ? "Timeline: " . ($timelineLabels[$formData['timeline']] ?? $formData['timeline']) . "\n" : "") . "
" . (!empty($formData['source']) ? "Source: " . ($sourceLabels[$formData['source']] ?? $formData['source']) . "\n" : "") . "

Project Description:
" . str_repeat('-', 30) . "
{$formData['description']}

" . str_repeat('=', 50) . "
Submitted on: " . date('F j, Y \a\t g:i A T') . "
IP Address: {$_SERVER['REMOTE_ADDR']}
";

// ============================================
// SEND EMAIL
// ============================================
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    "From: {$config['company_name']} <{$config['from_email']}>",
    "Reply-To: {$formData['fullName']} <{$formData['email']}>",
    'X-Mailer: PHP/' . phpversion()
];

$success = false;
$errorMessage = '';

if ($config['send_email']) {
    $success = mail(
        $config['to_email'],
        $subject,
        $emailBody,
        implode("\r\n", $headers)
    );

    if (!$success) {
        $errorMessage = 'Failed to send email. Please try again later.';
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
                $formData['fullName'] . "\n";

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
