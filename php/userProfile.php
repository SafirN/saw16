<?php
    include("phpconf.php");
    $username = "Safir";

    //Create connection
    $conn = new PDO($serverName, $username, $pw);

    //Check connection

    $conn->query("USE saw16"); // Selecting db

    $prepared = $conn->prepare("SELECT type FROM profileType WHERE mail = ?");
    $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
    $prepared->execute();
    $type = $prepared->fetch(PDO::FETCH_ASSOC);
    $arr = array();
    if(strcmp("user", $type['type']) == 0){
        $prepared = $conn ->prepare("SELECT name, mail, profilePicture, currentWork, gender, education, age, description, merits, city FROM userProfiles WHERE mail = ?");
        $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);
        array_push($arr, $result);
    }else{
        $prepared = $conn ->prepare("SELECT company, mail, orientation, companyPicture, headQuarter, description, isHiring FROM companyProfiles WHERE mail = ?");
        $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);
        array_push($arr, $result);
    }

    array_push($arr, $_COOKIE['mail']);
    array_push($arr, $_COOKIE['userType']);
    print json_encode($arr);
    
    //print json_encode($result['name']);
?>