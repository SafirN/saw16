function loadProfile() {
   $.ajax({
    url: "../php/userProfile.php",
    type: "GET",
    dataType: "json",
    success: function(data) {
      var retString = "";
      if(data[2] === "user"){
        retString += '<div id="container">\
         Shit is real\
          <div id="profilePicture">\
              <img id="userPicture" alt="Ingen bild, sorry!" src="' + data[0].profilePicture + '">\
         </div>\
         <div id="profileName">\
          <p id="profileText">' + data[0].name + '</p>\
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
          <p class="infoText">' + data[0].mail + '</p>\
          <p class="infoText">' + data[0].city + '</p>\
          <p class="infoText">' + data[0].age + '</p>\
          <p class="infoText">' + data[0].gender + '</p>\
          <p class="infoText">' + data[0].education + '</p>\
          <p class="infoText">' + data[0].currentWork + '</p>\
          <p class="infoText">' + data[0].merits + '</p>\
         </div>\
        </div>\
        <div id="descriptionContainer">\
         <p id="descriptionText">' + data[0].description + '</p>';
        if(data[1] === data[0].mail){
        retString += '<div id="editInfo"> <button onClick="editUserProfile()"> Edit your profile</button> </div>';
      }
        
      }else{
         retString += '<div id="container">\
         Shit is real\
          <div id="profilePicture">\
              <img id="userPicture" alt="Ingen bild, sorry!" src="' + data[0].companyPicture + '">\
         </div>\
         <div id="profileName">\
          <p id="profileText">' + data[0].company + '</p>\
         </div>\
         <div id="infoContainer">\
          <div id="infoTitles">\
           <p class="infoTitle"> Contact:</p>\
           <p class="infoTitle"> HQ: </p>\
           <p class="infoTitle"> Orientation:  </p>\
          </div>\
         <div id="infoText">\
          <p class="infoText">' + data[0].mail + '</p>\
          <p class="infoText">' + data[0].headQuarter + '</p>\
          <p class="infoText">' + data[0].orientation + '</p>\
         </div>\
        </div>\
        <div id="descriptionContainer">\
         <p id="descriptionText">' + data[0].description + '</p>';
        if(data[1] === data[0].mail){
        retString += '<div id="editInfo"> <button onClick="editCompanyProfile()"> Edit your profile</button> </div>';
        retString += '<div id="addPosition"> <button onClick="addPosition()"> Add position</button> </div>';
        retString += '<div id="applications"> <button onClick="viewApplications()"> View applications</button> </div>';
      }
        retString += '<div id="showPositions"> <button onClick="loadOpenPositions(\'' + data[0].company+ '\')">View open positions</button> </div>';

      }
      
      retString += '</div>';
      document.getElementById("search").innerHTML = '<form id="personCompanySearchForm">\
                <input id="searchField" type="search" name="search" placeholder="Find person/company"><button id="submitSearch" type="button" onClick="searchPersonCompany(document.getElementById(\'searchField\').value)">Go!</button>\
                </form>';
      document.getElementById("content").innerHTML = retString;

    } //end of success
  }); //end of AJAX
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

function searchPersonCompany(searchStr) {
    var retStr = '<link rel="stylesheet" type="text/css" href="css/personCompanySearchResults.css"><h2>People</h2><div id="container"><ul>';
    //PEOPLE
    $.ajax({
      url: "../php/sp.php",
      data: { data: searchStr },
      type: "GET",
      dataType: "json",
      success: function(data) {
        for(var i = 0; i < data.length; i++) {
          retStr += '<li class="personCell">\
          <p class="personName">' + data[i].name + '</p>\
          </li>';
        }
        retStr += '</ul></div>';
      }
    });
    //COMPANIES
    $.ajax({
      url: "../php/sc.php",
      data: { data: searchStr },
      type: "GET",
      dataType: "json",
      success: function(data) {
        retStr += '<br><h2>Companies</h2><div id="container"><ul>';
        for(var i = 0; i < data.length; i++) {
          retStr += '<li class="companyCell">\
          <p class="companyName">' + data[i].company + '</p>\
          </li>';
        }
        retStr += '</ul></div>';
        document.getElementById("content").innerHTML = retStr;
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
            <div id="applications"> <button onClick="viewApplications(\'' + data[i].company  +'\',\'' + data[i].position + '\', \'accept\')">Accept</button> </div>\
            <div id="applications"> <button onClick="viewApplications(\'' + data[i].company  +'\',\'' + data[i].position + '\', decline)">Decline</button> </div>\
           </li>';
     }
     retString += '</ul></div>';
    document.getElementById("content").innerHTML = retString;
    }
  })
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