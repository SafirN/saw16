<?php
    include("phpconf.php");
    $username = "Safir";

    //Create connection
    $conn = new PDO($serverName, $username, $pw);

    //Check connection
    if ($conn->connect_error){
        die("Connection failed"  .$conn->connect_error);
    }

    $conn->query("USE saw16"); // Selecting db

    $prepared = $conn ->prepare("SELECT name, mail, profilePicture, currentWork, gender, education, age, description, merits, city FROM userProfiles WHERE mail = ?");
    $prepared->bindParam(1, $_COOKIE['$mail'], PDO::PARAM_STR, strlen($_COOKIE['$mail']));
    $prepared->execute();
    $result = $prepared->fetchAll(PDO::FETCH_COLUMN, 0);
    print json_encode("result"=>$result);
?>