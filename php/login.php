<?php
	echo '<link rel="stylesheet" type="html/css" src="css/login.css">';
	echo '<p>Login</p>';
	echo '<form action="verify.php" method="post" id="loginFields">';
	echo '<input type="text" name="mail" placeholder="User mail"><br>';
	echo '<input type="text" name="password" placeholder="Password">';
	echo '</form>';
?>