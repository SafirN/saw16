<?php
	include("phpconf.php");
	$username = "Safir";	
	//Create connection
	$conn = new PDO($serverName, $username, $pw);

	//Check connection

	$conn->query("USE saw16"); // Selecting db

	$mail = $_POST['mail'];
	$password = $_POST['password'];

	$prepared = $conn ->prepare("SELECT mail, password, salt FROM credentials WHERE mail = ?");
	$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
	$prepared->execute();

	$num_row = $prepared->rowCount();
	$hashPw = "";
	$salt ="";
	while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
					$hashPw = $row["password"];
					$salt =  $row["salt"];
	}	
	if($num_row > 0){ //Användare finns
		if(hash_equals($hashPw, crypt($password, $salt))){
			$prepared = $conn ->prepare("SELECT type FROM profileType WHERE mail = ?");
			$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
			$prepared->execute();
			$result = $prepared->fetch(PDO::FETCH_ASSOC);
			setcookie('mail', $mail, time()+ (86400 * 30), "/");
			setcookie('userType', $result['type'], time()+ (86400 * 30), "/");
		}else{
		}
	}
	header("Location: index.php");
?>
