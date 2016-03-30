function loadLogin() {
	document.getElementById("content").innerHTML = '<link rel="stylesheet" type="html/css" src="css/login.css">\
		<form action="verify.php" method="post" id="loginFields">\
		<input type="text" name="mail" placeholder="User mail"><br>\
		<input type="text" name="password" placeholder="Password"><br>\
		<input type="submit" value="Login">\
		</form>';
}


/*function loadLogin() {
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("content").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "login.php" , true);
        xmlhttp.send();
}*/