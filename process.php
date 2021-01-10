<?php
  if (isset($_POST['email']))  {
  
    //Email information
    $admin_email = "boomballoonlv@gmail.com";
    $name = $_POST['name'];
    $last = $_POST['last'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission", $message . ' - ' . "From:" . $email);
    
    header('Location: http://boomballoonlv.com/success.html');
  }