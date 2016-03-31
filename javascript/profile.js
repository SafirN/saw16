
function loadProfile(userType) {
  if(userType === "user") {
        //Update content with user profile HTML
  } else {
        //Update content with company profile HTML
  }
  
  $.ajax({
    url: "../php/userProfile.php",
    type: "GET",
    dataType:"json",
    success: function(data) {
      document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <div id="container">\
       Shit is real\
        <div id="profilePicture">\
            <img id="userPicture" alt="Ingen bild, sorry!" src="' + data.profilePicture + '">\
       </div>\
       <div id="profileName">\
        <p id="profileText">' + data.name + '</p>\
       </div>\
       <div id="infoContainer">\
        <div id="infoTitles">\
         <p class="infoTitle"> Contact:</p>\
         <p class="infoTitle"> City: </p>\
         <p class="infoTitle"> Age:  </p>\
         <p class="infoTitle"> Gender: </p>\
         <p class="infoTitle"> Education:  </p>\
         <p class="infoTitle"> Occupation:  </p>\
         <p class="infoTitle"> Merits:  </p>\
        </div>\
       <div id="infoText">\
        <p class="infoText">' + data.mail + '</p>\
        <p class="infoText">' + data.city + '</p>\
        <p class="infoText">' + data.age + '</p>\
        <p class="infoText">' + data.gender + '</p>\
        <p class="infoText">' + data.education + '</p>\
        <p class="infoText">' + data.currentWork + '</p>\
        <p class="infoText">' + data.merits + '</p>\
       </div>\
      </div>\
      <div id="descriptionContainer">\
       <p id="descriptionText">' + data.description + '</p>\
    </div>';
    } //end of success
  }); //end of AJAX
}


/*
function loadProfile(userType) {
  if(userType === "user") {
        //Update content with user profile HTML
  } else {
        //Update content with company profile HTML
  }
  
  $.ajax({
    url: "../php/userProfile.php",
    type: "GET",
    dataType:"json",
    success: function(data) {
      document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <div id="container">\
       Shit is real\
        <div id="profilePicture">\
            <img id="userPicture" alt="Ingen bild, sorry!" src="' + data[2] + '">\
       </div>\
       <div id="profileName">\
        <p id="profileText">' + data[0] + '</p>\
       </div>\
       <div id="infoContainer">\
        <div id="infoTitles">\
         <p class="infoTitle"> Contact:</p>\
         <p class="infoTitle"> City: </p>\
         <p class="infoTitle"> Age:  </p>\
         <p class="infoTitle"> Gender: </p>\
         <p class="infoTitle"> Education:  </p>\
         <p class="infoTitle"> Occupation:  </p>\
         <p class="infoTitle"> Merits:  </p>\
        </div>\
       <div id="infoText">\
        <p class="infoText">' + data[1] + '</p>\
        <p class="infoText">' + data[9] + '</p>\
        <p class="infoText">' + data[6] + '</p>\
        <p class="infoText">' + data[4] + '</p>\
        <p class="infoText">' + data[5] + '</p>\
        <p class="infoText">' + data[3] + '</p>\
        <p class="infoText">' + data[8] + '</p>\
       </div>\
      </div>\
      <div id="descriptionContainer">\
       <p id="descriptionText">' + data[7] + '</p>\
    </div>';
    } //end of success
    error: function() {
        alert("SOMETHING IS WRONG");
    }
  }); //end of AJAX
}
*/