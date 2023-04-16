<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $to = "maubringas@gmail.com";
  $subject = "New message from your website";
  $headers = "From: $email\r\nReply-To: $email\r\n";
  $mail_body = "Name: $name\nEmail: $email\n\n$message";
  mail($to, $subject, $mail_body, $headers);
  header("Location: thanks.html");
}
?>
