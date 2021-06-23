<?php

	$myaddr = 'nelot@mail.ru';
  $senddate = date("d.m.Y H:i:s");

	$headers  = "From: nikitenkovit.ru \r\n";
	$headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	if (isset($_POST['name'])) {
	    $name 	= $_POST['name'];
	    $text .= '<p><strong>Имя</strong> ' . $name . '</p>';
	}
	if (isset($_POST['email'])) {
	    $email 	= $_POST['email'];
	    $text .= '<p><strong>email</strong> ' . $email . '</p>';
	}
	if (isset($_POST['subject'])) {
	    $subject 	= $_POST['email'];
	    $text .= '<p><strong>subject</strong> ' . $subject . '</p>';
	}
	if (isset($_POST['message'])) {
	    $message 	= $_POST['message'];
	    $text .= '<p><strong>subject</strong> ' . $message . '</p>';
	}

	$subj = "Портфолио обратный звонок:";

  $senderror = "error";

	mail($myaddr, $subj, $text, $headers);
	?>
