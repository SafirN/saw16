<?php 
  header("Content-Type: application/json", true);
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db

  $result = array();
  if(!empty($_POST['company'])){
    $prepared = $conn->prepare("SELECT company, position, weeklyHours, country, city, merits, description FROM openPositions WHERE company = ?");
    $prepared->bindParam(1, $_POST['company'], PDO::PARAM_STR, strlen($_POST['company']));
    $prepared->execute();
    while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      array_push($result, $row);
    }
    print json_encode($result);

  }else{
    $prepared = $conn->prepare("SELECT company, position, weeklyHours, country, city, merits, description FROM openPositions");
    $prepared->execute();
    while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      array_push($result, $row);
    }
    print json_encode($result);
  }
?>