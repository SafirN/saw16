<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db

  $prepared = $conn->prepare("SELECT company, position, weeklyHours, country, city, merits FROM openPositions");
  $prepared->execute();
  $result = array();
  while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      $result[] = json_encode($row);
  }
  print json_encode($result);
?>