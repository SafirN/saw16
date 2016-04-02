<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db
  $prepared = $conn->prepare("SELECT company, position, weeklyHours, country, city, merits, description FROM openPositions");
  $prepared->execute();
  $result = array();
  while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
    if(strpos($row['company'], $_GET['data']) !== false) {
      array_push($result, $row);
    }
  }
  print json_encode($result);
?>