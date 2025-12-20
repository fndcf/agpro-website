<?php
/**
 * AgPro International - Contact Form Email Handler
 *
 * Uses PHP mail() function - works reliably on HostGator shared hosting
 * when sending from a domain email to external addresses.
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
// CONFIGURATION
// ============================================
$config = [
    // Email address that will receive the contact form submissions
    'to_email' => 'noreply@agprointernational.com',  // Primeiro envia para o próprio domínio

    // Email address shown as the sender (must be from your domain)
    'from_email' => 'noreply@agprointernational.com',
    'from_name' => 'AgPro International Website',

    // Company name for email subject
    'company_name' => 'AgPro International',

    // Enable email sending (set to false for testing)
    'send_email' => true,

    // Rate limiting: max requests per IP per hour
    'rate_limit' => 10,

    // Log file path
    'log_file' => __DIR__ . '/contact_log.txt'
];

// ============================================
// RATE LIMITING
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
    $requests = array_filter($requests, function($timestamp) use ($oneHourAgo) {
        return $timestamp > $oneHourAgo;
    });

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

$subject = "[{$config['company_name']}] New Contact from {$formData['fullName']}";

// Build plain text email (more reliable than HTML on shared hosting)
$emailBody = "===================================\n";
$emailBody .= "NEW CONTACT FORM SUBMISSION\n";
$emailBody .= "===================================\n\n";

$emailBody .= "CONTACT INFORMATION\n";
$emailBody .= "-----------------------------------\n";
$emailBody .= "Full Name: {$formData['fullName']}\n";
$emailBody .= "Email: {$formData['email']}\n";

if (!empty($formData['company'])) {
    $emailBody .= "Company: {$formData['company']}\n";
}

if (!empty($formData['phone'])) {
    $emailBody .= "Phone: {$formData['phone']}\n";
}

if (!empty($formData['location'])) {
    $emailBody .= "Location: {$formData['location']}\n";
}

if (!empty($formData['timeline'])) {
    $timelineDisplay = $timelineLabels[$formData['timeline']] ?? $formData['timeline'];
    $emailBody .= "Timeline: {$timelineDisplay}\n";
}

if (!empty($formData['source'])) {
    $sourceDisplay = $sourceLabels[$formData['source']] ?? $formData['source'];
    $emailBody .= "How they found us: {$sourceDisplay}\n";
}

$emailBody .= "\nPROJECT DESCRIPTION\n";
$emailBody .= "-----------------------------------\n";
$emailBody .= $formData['description'] . "\n";

$emailBody .= "\n-----------------------------------\n";
$emailBody .= "Submitted on: " . date('F j, Y \a\t g:i A') . "\n";
$emailBody .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";
$emailBody .= "===================================\n";

// ============================================
// SEND EMAIL
// ============================================
$success = false;
$errorMessage = '';

if ($config['send_email']) {
    // Build headers
    $headers = [];
    $headers[] = "From: {$config['from_name']} <{$config['from_email']}>";
    $headers[] = "Reply-To: {$formData['fullName']} <{$formData['email']}>";
    $headers[] = "X-Mailer: PHP/" . phpversion();
    $headers[] = "Content-Type: text/plain; charset=UTF-8";

    $headerString = implode("\r\n", $headers);

    // Send email using mail()
    $success = @mail(
        $config['to_email'],
        $subject,
        $emailBody,
        $headerString
    );

    if (!$success) {
        $errorMessage = 'mail() function failed';
    }
} else {
    $success = true; // Testing mode
}

// ============================================
// LOG SUBMISSION
// ============================================
if ($config['log_file']) {
    $logEntry = date('Y-m-d H:i:s') . " | " .
                ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . " | " .
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
        'message' => 'Failed to send email. Please try again later or contact us directly.'
    ]);
}
