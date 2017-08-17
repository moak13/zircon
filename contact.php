<?php
	$to = "fstackdevinc@gmail.com";
	$from = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$surname = $_REQUEST['surname'];
	$subject = $_REQUEST['subject'];
	$headers = "From: $from";
	$topic = "Subject: $subject";
	$fields = array();
	$fields{"name"} = "name";
	$fields{"surname"} = "surname";
	$fields{"email"} = "email";
	$fields{"message"} = "message";
	$body = "Here is what was sent:\n\n"; foreach($fields as $a => $b) {   $body .= sprintf("%20s: %s\n", $.$_REQUEST[$a]);}
	$send = mail($to, $topic, $body, $headers);
?>