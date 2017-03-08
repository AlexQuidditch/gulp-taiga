<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")) {
	 //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'AlexQuidditch@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
					</body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>

<?php
header("Content-type: text/html; charset=utf-8");
//**********************************************
if(empty($_POST['js'])){

$log ="";
$error="no"; //флаг наличия ошибки

	$posName = addslashes($_POST['posName']);
	$posName = htmlspecialchars($posName);
	$posName = stripslashes($posName);
	$posName = trim($posName);

	$ = addslashes($_POST['']);
	$ = htmlspecialchars($);
	$ = stripslashes($);
	$ = trim($);

	//Проверка отправилось ли наше поля name и не пустые ли они
	$to = 'AlexQuidditch@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'Обратный звонок'; //Загаловок сообщения
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Имя: '.$_POST['name'].'</p>
				<p>Телефон: '.$_POST['phone'].'</p>
			</body>
		</html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

	echo ($response) ? '1' : '0';
	}
	?>
