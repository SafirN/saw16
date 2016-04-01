<?php 
  header("Content-Type: application/json", true);
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db

  $result = array();
    $prepared = $conn->prepare("SELECT position, userMail FROM appliedPositions WHERE companyMail = ?");
    $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
    $prepared->execute();
    while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      array_push($result, $row);
    }
    print json_encode($result);
?>