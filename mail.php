<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza CarrotCoding.pl";
$to = "kontakt@carrotcoding.pl";
$message = $_POST["msg"];


$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8\r\n";

// Konwersja polskich znaków do UTF-8
$name = base64_encode($name);
$from = utf8_decode($from);
$subject = "=?UTF-8?B?" . base64_encode($subject) . "?="; 
$message = base64_encode($message);  


$txt = "Imię: " . base64_decode($name) . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . base64_decode($message); 


$mail_status = mail($to, $subject, $txt, $headers);


if ($mail_status) {
    header("Location: /?mail_status=sent#contact");
} else {
    header("Location: /?mail_status=error#contact");
}

exit;
?>



