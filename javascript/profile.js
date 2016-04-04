	function loadProfile(mail) {
   $.ajax({
    url: "../php/userProfile.php",
    type: "POST",
    data: {searchMail: mail},
    dataType: "json",
    success: function(data) {
      	var retString = "";
      	if(data[3] === "user"){
        	retString += '<div id="contentHead">\
        	<img src=\'' + data[0].picture + '\' alt="Ingen bild, sorry!">\
        	<p>' + data[0].name + '</p>';
        	if(data[2] === data[0].mail){
            	retString += '<button id="editProfile" onClick="editUserProfile()"> Edit profile</button>';
        	}else if(data[1].length === 0){
            	retString += '<button id="addFollow" onClick="addFollow(\'' + data[0].mail + '\')">Follow</button>';
        	}else{
            	for(var i = 0; i < data[1].length; i++){
              		if(data[1][i].followingMail != data[0].mail){
                  		retString += '<button id="addFollow" onClick="addFollow(\'' + data[0].mail + '\')">Follow</button>';
                  		break; 
              		}
            	}
        	}
        	retString += '</div>\
      		<div id="contentFoot">\
          	<div id="detailSubject">\
            <p>Contact:</p>\
            <p>City:</p>\
            <p>Age:</p>\
            <p>Gender:</p>\
            <p>Education:</p>\
            <p>Occupation:</p>\
            <p>Merits:</p>\
          	</div>\
          	<div id="detailInfo">\
            <p>' + data[0].mail + '</p>\
            <p>' + data[0].city + '</p>\
            <p>' + data[0].age + '</p>\
            <p>' + data[0].gender + '</p>\
            <p>' + data[0].education + '</p>\
            <p>' + data[0].currentWork + '</p>\
            <p>' + data[0].merits + '</p>\
          	</div>\
          	<div id="description">\
            <p>Description</p>\
            <p>' + data[0].description + '</p>\
          	</div>';    
      	} else {
        	retString += '<div id="contentHead">\
        	<img src="bla" alt="Ingen bild, sorry!">\
        	<p>' + data[0].company + '</p>';
        	if(data[2] === data[0].mail) {
	        	retString += '<button id="editInfo" onClick="editCompanyProfile()">Edit profile</button>';
	        	retString += '<button id="addPosition" onClick="addPosition()">Add position</button>';
	        	retString += '<button id="applications" onClick="viewApplications()">View applications</button>';
        	}
        		retString += '<button id="showPositions" onClick="loadOpenPositions(\'' + data[0].company + '\')">View open positions</button>';
				retString += '</div>\
	    		<div id="contentFoot">\
		        <div>\
		          	<div id="detailSubject">\
			        	<p>Contact:</p>\
			            <p>HQ:</p>\
			            <p>Orientation</p>\
		          	</div>\
		          	<div id="detailInfo">\
			            <p>' + data[0].mail + '</p>\
			            <p>' + data[0].city + '</p>\
			            <p>' + data[0].orientation + '</p>\
		          	</div>\
		          	<div id="description">\
			            <p>Description</p>\
			            <p>' + data[0].description + '</p>\
		        	</div>\
		        </div>\
      		</div>';
  		}
      document.getElementById("search").innerHTML = '<form onsubmit="return searchPersonCompany()">\
                <input id="searchField" type="text" name="search" placeholder="Find person/company"><input id="submitSearch" type="submit" onClick="searchPersonCompany()" value="Go!")>\
                </form>';
      document.getElementById("content").innerHTML = retString;
    } //end of success
  }); //end of AJAX
}
function addFollow(follow){
  $.ajax({
      url: "../php/addFollow.php",
      type: "POST",
      data: {follow: follow},
      dataType: "json",
      success: function(data){
        alert(data);
    }
  });
}
function editUserProfile(){
  document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <form  id="editProfileForm">\
      <input type="text" id="age" placeholder="Age"><br>\
      <input type="text" id="city" placeholder="City"><br>\
      <input type="text" id="education" placeholder="Education"><br>\
      <input type="text" id="profilePicture" placeholder="Picture URL"><br>\
      <input type="text" id="currentWork" placeholder="Work"><br>\
      <input class="radioButtons" type="radio" id="genderMale" value="Male"> Male<br>\
      <input class="radioButtons" type="radio" id="genderFemale" value="Female"> Female<br>\
      <input class="radioButtons" type="radio" id="genderOther" value="Other"> Other<br>\
      <input type="text" id="merits" placeholder="Merits"><br>\
      <input type="text" id="description" placeholder="Description"><br>\
      <input type="submit" onClick="updateUserAjax()"value="Update Profile">\
      </form>\
    <button onClick="loadProfile()">Back</button>';

}
function editCompanyProfile(){
    document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <form id="editCompanyProfileForm">\
      <input type="text" id="companyPicture" placeholder="Picture URL"><br>\
      <input type="text" id="headQuarter" placeholder="HQ"><br>\
      <input type="text" id="orientation" placeholder="Orientation"><br>\
      <input type="text" id="description" placeholder="Description"><br>\
      <input type="submit" onClick="updateCompanyAjax()" value="Update Profile">\
      </form>\
      <button onClick="loadProfile()">Back</button>';
}
function addPosition(){
    document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <form  id="addPositionForm">\
      <input type="text" id="position" placeholder="Position"><br>\
      <input type="text" id="weeklyHours" placeholder="Working time"><br>\
      <input type="text" id="country" placeholder="Country"><br>\
      <input type="text" id="city" placeholder="City"><br>\
      <input type="text" id="merits" placeholder="Merits"><br>\
      <input type="number" id="freePositions" placeholder="1"><br>\
      <input type="text" id="description" placeholder="Description"><br>\
      <input type="submit" onClick="addPositionAjax()" value="Add position">\
      </form>\
      <button onClick="loadProfile()">Back</button>';
}
function addPositionAjax(){
  var positionVal = document.getElementById("position").value;
  var weeklyHoursVal = document.getElementById("weeklyHours").value;
  var countryVal = document.getElementById("country").value;
  var cityVal = document.getElementById("city").value;
  var meritsVal = document.getElementById("merits").value;
  var freePositionsVal = document.getElementById("freePositions").value;
  var descriptionVal = document.getElementById("description").value;
  $.ajax({
    url: "../php/addPosition.php",
    type: "POST",
    dataType: "json",
    data: {position: positionVal, weeklyHours: weeklyHoursVal, country: countryVal, city: cityVal, mertis: meritsVal, freePositions: freePositionsVal, description: descriptionVal},
    success: function(data) {
      alert(data);
    }
  });
}
function updateCompanyAjax(){
  var companyPictureVal = document.getElementById("companyPicture").value;
  var headQuarterVal = document.getElementById("headQuarter").value;
  var orientationVal = document.getElementById("orientation").value;
  var descriptionVal = document.getElementById("description").value;

  
 $.ajax({
    url: "../php/editProfile.php",
    type: "POST",
    dataType: "json",
    data: {companyPicture: companyPictureVal, headQuarter: headQuarterVal, orientation: orientationVal, description: descriptionVal},
    success: function(data){
      alert(data);
    }
  });
}
function updateUserAjax(){
  var ageVal = document.getElementById("age").value;
  var cityVal = document.getElementById("city").value;
  var educationVal = document.getElementById("education").value;
  var profilePictureVal = document.getElementById("profilePicture").value;
  var currentWorkVal = document.getElementById("currentWork").value;
  var genderVal = "";
  if(document.getElementById('genderMale').checked){
        genderVal = document.getElementById('genderMale').value;
  }else if(document.getElementById('genderFemale').checked){
        genderVal = document.getElementById('genderFemale').value;
  }else{
    genderVal = document.getElementById('genderOther').value;
  }
  var meritsVal = document.getElementById("merits").value;
  var descriptionVal = document.getElementById("description").value;

  $.ajax({
    url: "../php/editProfile.php",
    type: "POST",
    dataType: "json",
    data: {age: ageVal, city: cityVal, education: educationVal, profilePicture: profilePictureVal, currentWork: currentWorkVal, gender: genderVal, merits: meritsVal, description: descriptionVal},
    success: function(data){
      alert(data);
    }
  });

}
function declineApplicant(userMail, position){
    var optionVal = "accept";
     $.ajax({
      url: "../php/manageApplication.php",
      type: "POST",
      dataType: "json",
      data: {option: optionVal, userMail: userMail, position: position},
      success: function(data){
        viewApplications();
    }
  });
}
function acceptApplicant(userMail, position){
    var optionVal = "accept";
    $.ajax({
      url: "../php/manageApplication.php",
      type: "POST",
      dataType: "json",
      data: {option: optionVal, userMail: userMail, position: position},
      success: function(data){
        alert(data);
    }
  });
}
function viewApplications(){
  $.ajax({
    url: "../php/viewApplications.php",
    type: "GET",
    dataType: "json",
    success: function(data){
      var retString = '<link rel="stylesheet" type="text/css" href="css/viewApplications.css"><div id="container"><ul>';
     for(var i = 0; i < data.length; i++) {
          retString += '<li class="position">\
           <div id="positionContainer">\
             <p class="position">' + data[i].position + '</p>\
           </div>\
             <div id="infoTitles">\
              <p class="infoTitle"> Applicant: </p>\
             </div>\
             <div id="infoText">\
             <p class="infoText">' + data[i].userMail + '</p>\
            </div>\
            <button id="applyButton" onClick="acceptApplicant(\'' + data[i].userMail  +'\',\'' + data[i].position + '\')">Accept</button>\
            <button id="applyButton" onClick="declineApplicant(\'' + data[i].userMail  +'\',\'' + data[i].position + '\')">Decline</button>\
           </li>';
     }
     retString += '</ul></div>';
    document.getElementById("content").innerHTML = retString;
    }
  })
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

function searchPersonCompany() {	
	var searchStr = document.getElementById("searchField").value;
    var retStr = "";
    //PEOPLE
    $.ajax({
      url: "../php/sp.php",
      data: { data: searchStr },
      type: "GET",
      dataType: "json",
      success: function(data) {
        for(var i = 0; i < data.length; i++) {
          retStr += '<li class="personCell">\
          <p class="personName" onClick="loadProfile(\'' + data[i].mail + '\')">' + data[i].name + '</p>\
          </li>';
        }
        retStr += '</ul>';
      }
    });
    //COMPANIES
    $.ajax({
      url: "../php/sc.php",
      data: { data: searchStr },
      type: "GET",
      dataType: "json",
      success: function(data) {
        retStr += '<br><ul>';
        for(var i = 0; i < data.length; i++) {
          retStr += '<li class="companyCell">\
          <p class="companyName" onClick="loadProfile(\'' + data[i].mail + '\')">' + data[i].company + '</p>\
          </li>';
        }
        retStr += '</ul>';
        document.getElementById("search").innerHTML = '<form onsubmit="return searchPersonCompany()">\
                <input id="searchField" type="text" name="search" placeholder="Find person/company"><input id="submitSearch" type="submit" onClick="searchPersonCompany()" value="Go!")>\
                </form>';
        document.getElementById("content").innerHTML = retStr;
      }
    });
    return false;
}
function applicantFormAjax(userMail, position, option){
  alert(option);
    $.ajax({
      url: "../php/manageApplication.php",
      type: "POST",
      dataType: "json",
      data: {option: option, userMail: userMail, position: position},
      success: function(data){
        alert(data);
    }
  });
}
