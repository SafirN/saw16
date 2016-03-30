
function loadProfile(userType) {

    if(userType === "user") {
        //Update content with user profile HTML
    } else {
        //Update content with company profile HTML
    }

    document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
     <div id="container">\
       Shit is real\
       <div id="profilePicture">\
            <img id="userPicture">\
       </div>\
       <div id="profileName">\
        <p id="profileText">Carl-Erik von Pappaspengar</p>\
       </div>\
       <div id="infoContainer">\
        <div id="infoTitles">\
         <p class="infoTitle"> Contact: </p>\
         <p class="infoTitle"> City: </p>\
         <p class="infoTitle"> Age: </p>\
         <p class="infoTitle"> Gender: </p>\
         <p class="infoTitle"> Education: </p>\
         <p class="infoTitle"> Occupation: </p>\
         <p class="infoTitle"> Merits: </p>\
        </div>\
       <div id="infoText">\
        <p class="infoText"> ahmedson@gmail.com </p>\
        <p class="infoText"> Stockholm</p>\
        <p class="infoText"> 23</p>\
        <p class="infoText"> Male</p>\
        <p class="infoText"> KTH Royal Institute of Technology</p>\
        <p class="infoText"> Mc\'donalds</p>\
        <p class="infoText"> Shit is tuff</p>\
       </div>\
      </div>\
      <div id="descriptionContainer">\
       <p id="descriptionText">\
       Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\
       </p>\
    </div>';
}






/*function loadProfile(accType) {
	if(accType === "user") {
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("content").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "userProfileEcho.php" , true);
        xmlhttp.send();
	} else {
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("content").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "companyProfileEcho.php" , true);
        xmlhttp.send();
	}
}*/