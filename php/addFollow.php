<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db
  $prepared = $conn->prepare("INSERT INTO followers(mail, followingMail, datetime) VALUES (?,?, NOW())");
   $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
  $prepared->bindParam(2, $_POST['follow'], PDO::PARAM_STR, strlen($_POST['follow']));
  $prepared->execute();
  $result = array();
  print json_encode("You are now following " . $_POST['follow']);
?>