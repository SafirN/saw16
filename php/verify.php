<?php
	$servername = '130.229.162.242';
	$username = "Safir";
	$password = "safir12345678";
	$dbname = "saw16";
	
	//Create connection
	$conn = new PDO('mysql:host=130.229.162.242;dbname=saw16', $username, $password);

	//Check connection
	if ($conn->connect_error){
		 die("Connection failed"  .$conn->connect_error);
	}
	$conn->query("USE saw16"); // Selecting db

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
		echo "KUAEUAUEUAE";


	}


	$prepared = $conn->prepare("SELECT mail, password WHERE mail = ? AND password = ?;");
		$prepared->bindParam(1, $_POST['mail'], PDO::PARAM_STR, strlen($_POST['mail']));
		$prepared->bindParam(2, $_POST['password'], PDO::PARAM_STR, strlen($_POST['password']));
		$prepared->execute();
?>
