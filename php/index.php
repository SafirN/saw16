<!DOCTYPE html>
<html>
 <title>
  SAW - jobs for murderers
 </title>
  <head>
   <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.0.min.js"></script>
   <script type="text/javascript" src="../javascript/login.js"></script>
   <script type="text/javascript" src="../javascript/profile.js"></script>
   <script type="text/javascript" src="../javascript/openPositions.js"></script>
   <script type="text/javascript" src="../javascript/filledPositions.js"></script>
   <script type="text/javascript" src="../javascript/friends.js"></script>
   <script type="text/javascript" src="../javascript/bar.js"></script>
   <link rel="stylesheet" type="text/css" href="css/index.css">
  </head>
  <body>
   <link rel="stylesheet" type="text/css" href="css/frame.css">
   <div id="topBackground">
    <div id="banner">
     <img src="img/banner.png" alt="banner">
    </div>
    <div id="bar">
    </div>
   </div>
   <div id="contentDiv">
  	 <div id="content">
  	 <!-- Dynamic content is stored here! -->
  	 </div>
   </div>
   <?php
    $cookieName = "user";
    echo '<script> loadBar(); </script>';
    if(!isset($_COOKIE[$cookieName])) {
     echo '<script> loadLogin(); </script>';
    } else {
     echo '<script> loadProfile(); </script>';
    }
   ?>
 </body>
</html>