<?php
    include("phpconf.php");
    $username = "Safir";

    //Create connection
    $conn = new PDO($serverName, $username, $pw);

    //Check connection

    $conn->query("USE saw16"); // Selecting db
    $mail = "";
    if(!empty($_POST['searchMail'])){
        $mail = $_POST['searchMail'];
    }else{
        $mail = $_COOKIE['mail'];
    }

    $prepared = $conn->prepare("SELECT type FROM profileType WHERE mail = ?");
    $prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
    $prepared->execute();
    $type = $prepared->fetch(PDO::FETCH_ASSOC);
    $arr = array();
    if(strcmp("user", $type['type']) == 0){
        $prepared = $conn ->prepare("SELECT name, mail, profilePicture, currentWork, gender, education, age, description, merits, city FROM userProfiles WHERE mail = ?");
          $prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);
        array_push($arr, $result);

        $prepared = $conn ->prepare("SELECT followingMail FROM followers WHERE mail = ?");
        $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
        $prepared->execute();
        $result = $prepared->fetchAll(PDO::FETCH_ASSOC);
        array_push($arr, $result);

    }else{
        $prepared = $conn ->prepare("SELECT company, mail, orientation, companyPicture, headQuarter, description FROM companyProfiles WHERE mail = ?");
        $prepared->bindParam(1, $mail, PDO::PARAM_STR, strlen($mail));
        $prepared->execute();
        $result = $prepared->fetch(PDO::FETCH_ASSOC);
        array_push($arr, $result);
    }

    array_push($arr, $_COOKIE['mail']);
    array_push($arr, $type['type']);
    print json_encode($arr);
    
    //print json_encode($result['name']);
?>