<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza CarrotCoding.pl";
$to = "carrotcoding.kontakt@gmail.com";
$message = $_POST["msg"];

$txt = "Imię " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if($mail_status) {
    header("Location: /?mail_status=sent#contact"); 
} else {
    header("Location: /?mail_status=error#contact"); 
}

exit;

?>