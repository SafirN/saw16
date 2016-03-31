<?php
	include("phpconf.php");
	$username = "Safir";	
	//Create connection
	$conn = new PDO($serverName, $username, $pw);

	//Check connection

	$conn->query("USE saw16"); // Selecting db

	$name = $_POST['name'];
	$mail = $_POST['mail'];
	$password = $_POST['password'];

	$prepared = $conn ->prepare("SELECT mail FROM credentials WHERE mail = ?");
	$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
	$prepared->execute();

	$num_row = $prepared->rowCount();
	//while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
//					echo $row["lan"];/
		//			echo $row["objekttyp"];
	//			}	

	if($num_row > 0){ //Användare finns
		echo "HITTADE MAIL BROR";

	}else{ // Användare finns inte
		//Cost
		$cost = 10; 
		//Random salt
		$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
		echo "salted value " + $salt;
		//Infrmation about the hash using blowfish algorithm
		$salt = sprintf("$2a$%02d$", $cost) . $salt;
		//DES Based
		$hash = crypt($password, $salt);

		$prepared = $conn->prepare("INSERT INTO credentials(mail, password, salt) VALUES (?,?,?)");
		$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
		$prepared->bindParam(2, $hash, PDO::PARAM_STR, strlen($hash));
		$prepared->bindParam(3, $salt, PDO::PARAM_STR, strlen($salt));
		$prepared->execute();

		setcookie("cookie", $mail, time()+ (86400 * 30), "/");



	}
?>
