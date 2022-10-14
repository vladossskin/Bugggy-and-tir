<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    $to = "v-klochko@inbox.ru";
    $date = date("d.m.y.");
    $time = date ("h:i");
    $from = $email;
    $subject = "Заявка с сайта";


    $msg="
    Имя: $name /n
    Фамилия: $surname /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

    
?>

