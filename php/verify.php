<?php
	$servername = '130.229.162.242';
	$username = "Safir";
	$password = 
	$dbname = "saw16";
	
	//Create connection
	$conn = new PDO('mysql:host=130.229.162.242;dbname=saw16', $username, $password);

	//Check connection
	if ($conn->connect_error){
		 die("Connection failed"  .$conn->connect_error);
	}

	$selectDb = "USE saw16";
	$conn->query($selectDb);
	$prepared = $conn->prepare("SELECT mail, password WHERE mail = ? AND password = ?;");
		$prepared->bindParam(1, $_POST['mail'], PDO::PARAM_STR, strlen($_POST['mail']));
		$prepared->bindParam(2, $_POST['password'], PDO::PARAM_STR, strlen($_POST['password']));
		$prepared->execute();
?>
