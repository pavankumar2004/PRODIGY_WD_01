
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["_replyto"];
    $message = $_POST["message"];

    $to = "pk6122004@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Message:\n$message";

    mail($to, $subject, $mailBody, $headers);
}

