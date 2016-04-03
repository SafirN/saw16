<?php 
  include("phpconf.php");
  $username = "Safir";
  //Create connection
  $conn = new PDO($serverName, $username, $pw);
  $conn->query("USE saw16"); // Selecting db

  $prepared = $conn->prepare("DELETE FROM followers WHERE followers.mail = ? AND followers.followingMail = ?");
  $prepared->bindParam(1, $_COOKIE['mail'], PDO::PARAM_STR, strlen($_COOKIE['mail']));
  $prepared->bindParam(2, $_POST['data'], PDO::PARAM_STR, strlen($_POST['data']));
  $prepared->execute();
?>