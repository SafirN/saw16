<?php
	//insert into openPositions (company, position, weeklyHours, country, city, merits, freePositions) VALUES ("Google", "Fix andrid", "9-17", "Sweden", "Stockholm", "Degree in software engineering", 1);
	if(($_POST['freePositions'] < 0) || empty($_POST['country']) || empty($_POST['weeklyHours']) || empty($_POST['position']) ||empty($_POST['country']) || empty($_POST['city']) || empty($_POST['merits'])){
		echo "Form is filled incorrectly";
	}else{
		 	include("phpconf.php");
  	$username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db
		$prepared = $conn->prepare("SELECT company FROM companyProfiles WHERE mail = ?");
		$prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
		$prepared->execute();
		$company = $prepared->fetch(PDO::FETCH_ASSOC);
		
		$prepared = $conn->prepare("INSERT INTO openPositions(company, position, weeklyHours, country, city, merits, freePositions) VALUES (?,?,?,?,?,?,?)");
    	$prepared->bindParam(1, $company['company'], PDO::PARAM_STR, strlen($company['company']));
    	$prepared->bindParam(2, $_POST['position'] , PDO::PARAM_STR, strlen($_POST['position']));
    	$prepared->bindParam(3, $_POST['weeklyHours'] , PDO::PARAM_STR, strlen($_POST['weeklyHours']));
    	$prepared->bindParam(4, $_POST['country'] , PDO::PARAM_STR, strlen($_POST['country']));
    	$prepared->bindParam(5, $_POST['city'] , PDO::PARAM_STR, strlen($_POST['city']));
    	$prepared->bindParam(6, $_POST['merits'], PDO::PARAM_STR, strlen($_POST['merits']));
    	$prepared->bindParam(7, $_POST['freePositions'], PDO::PARAM_INT);
    	$prepared->execute();
		
	}
	header("Location: index.php");
?>