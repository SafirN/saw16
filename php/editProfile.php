<?php
    include("phpconf.php");
    $username = "Safir";

    //Create connection
    $conn = new PDO($serverName, $username, $pw);

    //Check connection
    $conn->query("USE saw16"); // Selecting db

    if(strcmp($_COOKIE['userType'], "user") == 0){

        $prepared = $conn->prepare("SELECT name, mail, profilePicture, currentWork, gender, education, age, description, merits, city FROM userProfiles WHERE mail = ?");
        $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);

    	if(strlen($_POST['profilePicture']) > 0){
    		$profilePicture = $_POST['profilePicture'];
    	}else{
    		$profilePicture = $result['profilePicture'];
    	}
    	if(strlen($_POST['currentWork']) > 0){
    		$currentWork = $_POST['currentWork'];
    	}else{
    		$currentWork = $result['currentWork'];
    	}
    	if(strlen($_POST['gender']) > 0){
    		$gender = $_POST['gender'];
    	}else{
    		$gender = $result['gender'];
    	}
    	if(strlen($_POST['education']) > 0){
    		$education = $_POST['education'];
    	}else{
    		$education = $result['education'];
    	}
    	if(strlen($_POST['age']) > 0){
    		$age = intval($_POST['age']);
    	}else{
    		$age = $result['age'];
    	}
    	if(strlen($_POST['merits']) > 0){
    		$merits = $_POST['merits'];
    	}else{
    		$merits = $result['merits'];
    	}
    	if(strlen($_POST['city']) > 0){
    		$city = $_POST['city'];
    	}else{
    		$city = $result['city'];
    	}
    	if(strlen($_POST['description']) > 0){ 
    		$description = $_POST['description'];
    	}else{
    		$description = $result['description'];
    	}

    	$prepared = $conn->prepare("UPDATE userProfiles SET profilePicture = ?, currentWork = ?, gender = ?, education = ?, age = ?, description = ?, merits = ?, city = ? WHERE mail = ?");
    	$prepared->bindParam(1, $profilePicture , PDO::PARAM_STR, strlen($profilePicture));
    	$prepared->bindParam(2, $currentWork , PDO::PARAM_STR, strlen($currentWork));
    	$prepared->bindParam(3, $gender , PDO::PARAM_STR, strlen($gender));
    	$prepared->bindParam(4, $education , PDO::PARAM_STR, strlen($education));
    	$prepared->bindParam(5, $age, PDO::PARAM_INT);
    	$prepared->bindParam(6, $description, PDO::PARAM_STR, strlen($description));
    	$prepared->bindParam(7, $merits, PDO::PARAM_STR, strlen($merits));
    	$prepared->bindParam(8, $city, PDO::PARAM_STR, strlen($city));
    	$prepared->bindParam(9, $_COOKIE['mail'] , PDO::PARAM_STR, strlen($_COOKIE['mail']));
    	$prepared->execute();
    }else{

        $prepared = $conn->prepare("SELECT company, mail, orientation, companyPicture, headQuarter, description FROM companyProfiles WHERE mail = ?");
        $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);    	  
    	if(strlen($_POST['companyPicture']) > 0){
    		$companyPicture = $_POST['companyPicture'];
    	}else{
    		$companyPicture = $result['companyPicture'];
    	}
    	if(strlen($_POST['headQuarter']) > 0){
    		$headQuarter = $_POST['headQuarter'];
    	}else{
    		$headQuarter = $result['headQuarter'];
    	}
    	if(strlen($_POST['orientation']) > 0){
    		$orientation = $_POST['orientation'];
    	}else{
    		$orientation = $result['orientation'];
    	}
    	if(strlen($_POST['description']) > 0){
    		$description = $_POST['description'];
           //   print json_encode("hitade description");
    	}else{
    		$description = $result['description'];
    	}

    	$prepared = $conn->prepare("UPDATE companyProfiles SET orientation = ?, companyPicture = ?, headQuarter = ?, description = ? WHERE mail = ?");
    	$prepared->bindParam(1, $orientation , PDO::PARAM_STR, strlen($orientation));
    	$prepared->bindParam(2, $companyPicture , PDO::PARAM_STR, strlen($companyPicture));
    	$prepared->bindParam(3, $headQuarter , PDO::PARAM_STR, strlen($headQuarter));
    	$prepared->bindParam(4, $description , PDO::PARAM_STR, strlen($description));
    	$prepared->bindParam(5, $_COOKIE['mail'] , PDO::PARAM_STR, strlen($_COOKIE['mail']));
    	$prepared->execute();
        

    }
?>