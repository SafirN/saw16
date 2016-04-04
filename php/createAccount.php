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
	$type = $_POST['type'];

	$prepared = $conn ->prepare("SELECT mail FROM credentials WHERE mail = ?");
	$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
	$prepared->execute();

	$num_row = $prepared->rowCount();

	$prepared = $conn ->prepare("SELECT company FROM companyProfiles WHERE company = ?");
	$prepared->bindParam(1, $name, PDO::PARAM_STR, strlen($name));
	$prepared->execute();

	$name_row = $prepared->rowCount();
	if($num_row > 0 || $name_row > 0){ //Användare finns
		echo "User already exists!";

	}else{ // Användare finns inte
		//Cost
		$cost = 10; 
		//Random salt
		$salt = strtr(base64_encode(mcrypt_create_iv(16, MCRYPT_DEV_URANDOM)), '+', '.');
		//Infrmation about the hash using blowfish algorithm
		$salt = sprintf("$2y$%02d$", $cost) . $salt;
		//DES Based
		$hash = crypt($password, $salt);

		$prepared = $conn->prepare("INSERT INTO credentials(mail, password, salt) VALUES (?,?,?)");
		$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
		$prepared->bindParam(2, $hash, PDO::PARAM_STR, strlen($hash));
		$prepared->bindParam(3, $salt, PDO::PARAM_STR, strlen($salt));
		$prepared->execute();


		if(strcmp("user", $type) == 0){ // User
			$prepared = $conn->prepare("INSERT INTO userProfiles(name, mail, profilePicture, currentWork, gender, education, age, description, merits, city) VALUES (?,?, 'hidden', 'hidden', 'hidden', 'hidden', 0, ' hidden', 'hidden', 'hidden')");
			$prepared->bindParam(1, $name, PDO::PARAM_STR, strlen($name));
			$prepared->bindParam(2, $mail, PDO::PARAM_STR, strlen($mail));
			$prepared->execute();

		}else{ //Company
			$prepared = $conn->prepare("INSERT INTO companyProfiles(company, mail, orientation, companyPicture, headQuarter, description) VALUES (?,?, 'hidden', 'hidden', 'hidden', 'hidden')");
			$prepared->bindParam(1, $name, PDO::PARAM_STR, strlen($name));
			$prepared->bindParam(2, $mail, PDO::PARAM_STR, strlen($mail));
			$prepared->execute();
		}
		$prepared = $conn->prepare("INSERT INTO credentials(mail, type) VALUES (?,?)");
		$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
		$prepared->bindParam(2, $hash, PDO::PARAM_STR, strlen($hash));
		$prepared->execute();

		$prepared = $conn->prepare("INSERT INTO profileType(mail, type) VALUES (?,?)");
		$prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
		$prepared->bindParam(2, $type, PDO::PARAM_STR, strlen($type));
		$prepared->execute();


		setcookie("mail", $mail, time()+ (86400 * 30), "/");
		setcookie("userType", $type, time()+ (86400 * 30), "/");	
	}
	header("Location: index.php");
?>
