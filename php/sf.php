<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db
  $prepared = $conn->prepare("SELECT name, datetime, friendMail FROM userFriends INNER JOIN userProfiles ON userFriends.friendMail = userProfiles.mail WHERE userFriends.mail = ?");
  $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
  $prepared->execute();
  $result = array();
  while($row = $prepared->fetch(PDO::FETCH_ASSOC)){
      if(strpos($row['name'], $_GET['data']) !== false) {
        array_push($result, $row);
      }
  }
  print json_encode($result);
?>