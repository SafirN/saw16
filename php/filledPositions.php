<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db

  $prepared = $conn->prepare("SELECT company, mail, position, datetime, weeklyHours FROM filledPositions");
  $prepared->execute();
  $result = array();
  while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      array_push($result, $row);
  }
  print json_encode($result);
?>

<!--<link rel="stylesheet" type="text/css" href="css/filledPositions.css">
<div id="container"> 
 <ul> 
  <li class="filledPositions">
   <div id="companyLogo">
				Logo
			</div>
			<div id="companyName">
 			<p class="companyTitle">Google</p>
			</div>
			<div id="positionContainer"> 
 			<p class="position"> Software Developer in Google Play </p>
			</div>
			<div id="filledBy">
				<p class ="position"> Filled by: Ahmed ahmedson</p>
			</div>
		</li>
 </ul>
</div>
-->