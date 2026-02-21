<?php
/**
 * Contact Form Handler - Hector Sedo Portfolio
 * Robust PHP handler with security, validation, and rate limiting
 */

// Security headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// CORS configuration - adjust domain in production
$allowed_origins = [
    'http://localhost:3000',
    'https://hectorsedo.com',
    'https://www.hectorsedo.com'
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Méthode non autorisée']);
    exit;
}

// Rate limiting (simple file-based)
function checkRateLimit($ip) {
    $rate_limit_file = sys_get_temp_dir() . '/contact_rate_limit_' . md5($ip);
    $max_requests = 3; // 3 requests
    $time_window = 3600; // per hour
    
    if (file_exists($rate_limit_file)) {
        $data = json_decode(file_get_contents($rate_limit_file), true);
        $requests = array_filter($data['requests'], function($timestamp) use ($time_window) {
            return (time() - $timestamp) < $time_window;
        });
        
        if (count($requests) >= $max_requests) {
            return false;
        }
        
        $requests[] = time();
        file_put_contents($rate_limit_file, json_encode(['requests' => $requests]));
    } else {
        file_put_contents($rate_limit_file, json_encode(['requests' => [time()]]));
    }
    
    return true;
}

// Get client IP
$client_ip = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';

// Check rate limit
if (!checkRateLimit($client_ip)) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'error' => 'Trop de requêtes. Veuillez réessayer dans une heure.'
    ]);
    exit;
}

// Get and decode JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Données JSON invalides']);
    exit;
}

// Validation functions
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function validateLength($str, $min, $max) {
    $len = mb_strlen($str, 'UTF-8');
    return $len >= $min && $len <= $max;
}

// Extract and sanitize fields
$name = sanitizeInput($data['name'] ?? '');
$email = sanitizeInput($data['email'] ?? '');
$subject = sanitizeInput($data['subject'] ?? '');
$message = sanitizeInput($data['message'] ?? '');

// Validation errors
$errors = [];

if (!validateLength($name, 2, 100)) {
    $errors['name'] = 'Le nom doit contenir entre 2 et 100 caractères';
}

if (!validateEmail($email)) {
    $errors['email'] = 'Adresse email invalide';
}

if (!validateLength($subject, 3, 200)) {
    $errors['subject'] = 'Le sujet doit contenir entre 3 et 200 caractères';
}

if (!validateLength($message, 10, 2000)) {
    $errors['message'] = 'Le message doit contenir entre 10 et 2000 caractères';
}

// Honeypot check (add a hidden field in the form)
if (!empty($data['website'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Spam détecté']);
    exit;
}

// Return validation errors
if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Email configuration
$to = 'hectorsedo@gmail.com'; // Your email
$email_subject = "Portfolio Contact: $subject";

// Email body
$email_body = "Nouveau message depuis le portfolio\n\n";
$email_body .= "Nom: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Sujet: $subject\n\n";
$email_body .= "Message:\n$message\n\n";
$email_body .= "---\n";
$email_body .= "IP: $client_ip\n";
$email_body .= "Date: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = [
    'From: Portfolio Contact Form <noreply@hectorsedo.com>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Priority: 3',
    'X-MSMail-Priority: Normal'
];

// Send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Log successful submission (optional)
    $log_file = sys_get_temp_dir() . '/contact_submissions.log';
    $log_entry = date('Y-m-d H:i:s') . " - Success - $email - $subject\n";
    file_put_contents($log_file, $log_entry, FILE_APPEND);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message envoyé avec succès ! Je vous répondrai sous 24h.'
    ]);
} else {
    // Log failed submission
    $log_file = sys_get_temp_dir() . '/contact_errors.log';
    $log_entry = date('Y-m-d H:i:s') . " - Failed - $email - $subject\n";
    file_put_contents($log_file, $log_entry, FILE_APPEND);
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.'
    ]);
}
