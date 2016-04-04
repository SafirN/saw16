<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db
  $prepared = $conn->prepare("SELECT filledPositions.company, filledPositions.position, filledPositions.datetime, filledPositions.weeklyHours, companyProfiles.companyPicture FROM filledPositions INNER JOIN companyProfiles ON filledPositions.company = companyProfiles.company");
  $prepared->execute();
  $result = array();
  while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
    if(strpos(strToLower($row['company']), strToLower($_GET['data'])) !== false) {
      array_push($result, $row);
    }
  }
  print json_encode($result);
?>