<?php

// Walidacja i sanitizacja danych wejściowych
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: /?mail_status=error#contact");
    exit;
}

$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$from = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$message = filter_input(INPUT_POST, 'msg', FILTER_SANITIZE_SPECIAL_CHARS);

// Walidacja emaila
if (!$from || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
    header("Location: /?mail_status=error#contact");
    exit;
}

// Walidacja wymaganych pól
if (!$name || !$message) {
    header("Location: /?mail_status=error#contact");
    exit;
}

$subject = "Wiadomość z formularza CarrotCoding.pl";
$to = "kontakt@carrotcoding.pl";

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /?mail_status=sent#contact");
} else {
    header("Location: /?mail_status=error#contact");
}

exit;
?>



