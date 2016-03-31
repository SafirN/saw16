<?php
    include("phpconf.php");
    $username = "Safir";

    //Create connection
    $conn = new PDO($serverName, $username, $pw);

    //Check connection
    $conn->query("USE saw16"); // Selecting db

    if(strcmp($_COOKIE['userType'], "user") == 0){
    	
    	if(strlen($_POST['name']) > 0){
    		$name = $_POST['name'];
    	}else{
    		$name = "hidden";
    	}
    	if(strlen($_POST['profilePicture']) > 0){
    		$profilePicture = $_POST['profilePicture'];
    	}else{
    		$profilePicture = "hidden";
    	}
    	if(strlen($_POST['currentWork']) > 0){
    		$currentWork = $_POST['currentWork'];
    	}else{
    		$currentWork = "hidden";
    	}
    	if(strlen($_POST['gender']) > 0){
    		$gender = $_POST['gender'];
    	}else{
    		$gender = "hidden";
    	}
    	if(strlen($_POST['education']) > 0){
    		$education = $_POST['education'];
    	}else{
    		$education = "hidden";
    	}
    	if(strlen($_POST['age']) > 0){
    		$age = intval($_POST['age']);
    	}else{
    		$age = 0;
    	}
    	if(strlen($_POST['merits']) > 0){
    		$merits = $_POST['merits'];
    	}else{
    		$merits = "hidden";
    	}
    	if(strlen($_POST['city']) > 0){
    		$city = $_POST['city'];
    	}else{
    		$city = "hidden";
    	}
    	if(strlen($_POST['description']) > 0){
    		$description = $_POST['description'];
    	}else{
    		$description = "hidden";
    	}

    	$prepared = $conn->prepare("UPDATE userProfiles SET name = ?, profilePicture = ?, currentWork = ?, gender = ?, education = ?, age = ?, description = ?, merits = ?, city = ? WHERE mail = ?");
    	$prepared->bindParam(1, $name, PDO::PARAM_STR, strlen($name));
    	$prepared->bindParam(2, $profilePicture , PDO::PARAM_STR, strlen($profilePicture));
    	$prepared->bindParam(3, $currentWork , PDO::PARAM_STR, strlen($currentWork));
    	$prepared->bindParam(4, $gender , PDO::PARAM_STR, strlen($gender));
    	$prepared->bindParam(5, $education , PDO::PARAM_STR, strlen($education));
    	$prepared->bindParam(6, $age, PDO::PARAM_INT);
    	$prepared->bindParam(7, $description, PDO::PARAM_STR, strlen($description));
    	$prepared->bindParam(8, $merits, PDO::PARAM_STR, strlen($merits));
    	$prepared->bindParam(9, $city, PDO::PARAM_STR, strlen($city));
    	$prepared->bindParam(10, $_COOKIE['mail'] , PDO::PARAM_STR, strlen($_COOKIE['mail']));
    	$prepared->execute();
    }else{
    	if(strlen($_POST['company']) > 0){
    		$company = $_POST['company'];
    	}else{
    		$company = "hidden";
    	}
    	if(strlen($_POST['companyPicture']) > 0){
    		$companyPicture = $_POST['companyPicture'];
    	}else{
    		$companyPicture = "hidden";
    	}
    	if(strlen($_POST['headQuarter']) > 0){
    		$headQuarter = $_POST['headQuarter'];
    	}else{
    		$headQuarter = "hidden";
    	}
    	if(strlen($_POST['orientation']) > 0){
    		$orientation = $_POST['orientation'];
    	}else{
    		$orientation = "hidden";
    	}
    	if(strlen($_POST['description']) > 0){
    		$description = $_POST['description'];
    	}else{
    		$description = "hidden";
    	}

    	$prepared = $conn->prepare("UPDATE companyProfiles SET company = ?, orientation = ?, companyPicture = ?, headQuarter = ?, description = ?, isHiring = ? WHERE mail = ?");
    	$prepared->bindParam(1, $company, PDO::PARAM_STR, strlen($company));
    	$prepared->bindParam(2, $orientation , PDO::PARAM_STR, strlen($orientation));
    	$prepared->bindParam(3, $companyPicture , PDO::PARAM_STR, strlen($companyPicture));
    	$prepared->bindParam(4, $headQuarter , PDO::PARAM_STR, strlen($headQuarter));
    	$prepared->bindParam(5, $description , PDO::PARAM_STR, strlen($description));
    	$prepared->bindParam(6, $isHiring, PDO::PARAM_STR, strlen($isHiring));
    	$prepared->bindParam(7, $_COOKIE['mail'] , PDO::PARAM_STR, strlen($_COOKIE['mail']));
    	$prepared->execute();

    }

    header("Location: index.php");
?>