<?php 
	header("Content-Type: application/json", true);
    if(strcmp($_POST['option'], "accept") == 0){
    	include("phpconf.php");
	  	$username = "Safir";
	  	//Create connection
		  	$conn = new PDO($serverName, $username, $pw);
	  	$conn->query("USE saw16"); // Selecting db

	  	//GET company
		$prepared = $conn->prepare("SELECT company FROM companyProfiles WHERE mail = ?");
	    $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
	    $prepared->execute();
	    $company = $prepared->fetch(PDO::FETCH_ASSOC);

		$prepared = $conn->prepare("SELECT freePositions, weeklyHours FROM openPositions WHERE company = ? AND position = ?");
		$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
	    $prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
	    $prepared->execute();

	    $freePositions = $prepared->fetch(PDO::FETCH_ASSOC);
	
	    if($freePositions['freePositions'] > 0){
	    		

			//Minska 1 på free position
			$prepared = $conn->prepare("UPDATE openPositions SET freePositions = freePositions - 1 WHERE company = ? AND position = ? AND freePositions > 0");
		    $prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
		    $prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
		    $prepared->execute();
		   
		    //Ta bort från applied positions
		    $prepared = $conn->prepare("DELETE FROM appliedPositions WHERE company = ? AND  position = ? AND userMail = ?");
		   	$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
		    $prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
			$prepared->bindParam(3, $_POST['userMail'], PDO::PARAM_STR, strlen($_POST['userMail']));
		    $prepared->execute();
		   	
		    //Lägga till i filledPositions
		    $prepared = $conn->prepare("INSERT INTO  filledPositions(company, mail, position, datetime, weeklyHours) VALUES (?,?,?,NOW(),?)");
		   	$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
		   	$prepared->bindParam(2, $_POST['userMail'], PDO::PARAM_STR, strlen($_POST['userMail']));
		    $prepared->bindParam(3, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
			$prepared->bindParam(4, $freePositions['weeklyHours'], PDO::PARAM_STR, strlen($freePositions['weeklyHours']));
		    $prepared->execute();

		   	//KOLLA OM VI SKA TA BORT position eller ej
		    $prepared = $conn->prepare("SELECT freePositions FROM openPositions WHERE company = ? AND position = ?");
			$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
	    	$prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
	    	$prepared->execute();
	    	$freePositions = $prepared->fetch(PDO::FETCH_ASSOC);
	    	if($freePositions['freePositions'] == 0){
	    		$prepared = $conn->prepare("DELETE FROM  openPositions WHERE company = ? AND position = ?");
		    	$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
		    	$prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
		    	$prepared->execute();
	    	}
	    }
	}else{
		$prepared = $conn->prepare("DELETE FROM appliedPositions WHERE company = ? AND  position = ? AND userMail = ?");
		$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
		$prepared->bindParam(2, $_POST['position'], PDO::PARAM_STR, strlen($_POST['position']));
		$prepared->bindParam(3, $_POST['userMail'], PDO::PARAM_STR, strlen($_POST['userMail']));
		$prepared->execute();

		
	}

?>