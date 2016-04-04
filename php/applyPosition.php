<?php 
	header("Content-Type: application/json", true);
  	
	if(strcmp($_COOKIE['userType'], "user") == 0){
		//Check if user is already applied
		include("phpconf.php");
		$username = "Safir";
		//Create connection
		$conn = new PDO($serverName, $username, $pw);
		$conn->query("USE saw16"); // Selecting db

		$prepared = $conn->prepare("SELECT userMail FROM appliedPositions WHERE company = ? AND position = ? AND userMail = ?");
		$prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
		$prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
		$prepared->bindParam(3, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
		$prepared->execute();
		$num_rows = $prepared->rowCount();

		if($num_rows == 0){ //Har ej sökt tidigare
			$prepared = $conn->prepare("SELECT freePositions FROM openPositions WHERE company = ? AND position = ?");
			$prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
			$prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
			$prepared->execute();

			$freePositions = $prepared->fetch(PDO::FETCH_ASSOC);

			if($freePositions['freePositions'] > 0){
				//Minska 1 på free position
				/*$prepared = $conn->prepare("UPDATE openPositions SET freePositions = freePositions - 1 WHERE company = ? AND position = ? AND freePositions > 0");
			    $prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
			    $prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
			    $prepared->execute();
			    */
			    //Hämta comp mail
			    $prepared = $conn->prepare("SELECT mail FROM companyProfiles WHERE company = ?");
			    $prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
			    $prepared->execute();
			    $companyMail = $prepared->fetch(PDO::FETCH_ASSOC);
			    //Lägg in i applied positions 
			    $prepared = $conn->prepare("INSERT INTO appliedPositions(company, position, companyMail, userMail) VALUES (?,?,?,?)");
			   	$prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
			    $prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
				$prepared->bindParam(3, $companyMail['mail'], PDO::PARAM_STR, strlen($companyMail['mail']));
			    $prepared->bindParam(4, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
			    $prepared->execute();
			    print json_encode("You have applied for " . $_POST['position']);

			}else{
				print json_encode("Someone was faster then you to apply for this job");
			}
		}else{
				print json_encode("Already applied for this job");
		}
	}else{
		print json_encode("You cant apply for a job as an company");
	}
?>

