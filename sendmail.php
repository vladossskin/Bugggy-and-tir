<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exeptions;

    require 'phpmailer/src/Exeptions.php'
    require 'phpmailer/src/PHPMailer.php'

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    // от кого письмо
    $mail->setfrom('v-klochko@inbox.ru', 'Владислав');
    // Кому отправить
    $mail->addAddress('vladyslav801@gmail.com');
    // Тема письма
    $mail->Subject = 'Фарма с сайта'

    // Тело письма
    $body = '<h1>У вас новая заявка</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>'; 
    }

    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>'; 
    }

    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>'; 
    }

    // Отправляем
    if(!$mail->send()) {
        $message = 'ошибка';
    } else{
        $message = 'Данные оправлены';
    }
    
    $response = ['message' => $message];

    header('content-type: application/json');
    echo json_encode($response)
?>