<?php
header("Content-type: text/html; charset=utf-8");
//**********************************************
if(empty($_POST['js'])){

	$modalName = addslashes($_POST['modalName']);
	$modalName = htmlspecialchars($modalName);
	$modalName = stripslashes($modalName);
	$modalName = trim($modalName);

	$modalPhone = addslashes($_POST['modalPhone']);
	$modalPhone = htmlspecialchars($modalPhone);
	$modalPhone = stripslashes($modalPhone);
	$modalPhone = trim($modalPhone);

	$modalMessage = addslashes($_POST['modalMessage']);
	$modalMessage = htmlspecialchars($modalMessage);
	$modalMessage = stripslashes($modalMessage);
	$modalMessage = trim($modalMessage);

	$modalCounter = addslashes($_POST['modalCounter']);
	$modalCounter = htmlspecialchars($modalCounter);
	$modalCounter = stripslashes($modalCounter);
	$modalCounter = trim($modalCounter);

	$modalPeriod = addslashes($_POST['modalPeriod']);
	$modalPeriod = htmlspecialchars($modalPeriod);
	$modalPeriod = stripslashes($modalPeriod);
	$modalPeriod = trim($modalPeriod);

	$modalChoice = addslashes($_POST['modalChoice']);
	$modalChoice = htmlspecialchars($modalChoice);
	$modalChoice = stripslashes($modalChoice);
	$modalChoice = trim($modalChoice);

	//Проверка отправилось ли наше поля name и не пустые ли они
	$to = 'AlexQuidditch@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
	$subject = 'Обратный звонок'; //Загаловок сообщения
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Имя: '.$modalName.'</p>
				<p>Телефон: '.$modalPhone.'</p>
			</body>
		</html>'; //Текст нащего сообщения можно использовать HTML теги
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
	$headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя

// Что-то вот такое. Хызы, правильно ли, надо тестить на серве

// обязательно запили Response булевым значением, его получит скрипт, и отдаст ответ интерфейсу
echo ($response) ? '1' : '0';
}
?>
