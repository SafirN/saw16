function loadProfile() {
   $.ajax({
    url: "../php/userProfile.php",
    type: "GET",
    dataType: "json",
    success: function(data) {
      var retString = "";
      if(data[2] === "user"){
        retString += '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
        <div id="container">\
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
         retString += '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
        <div id="container">\
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
      <form action="../php/editProfile.php" method="post" id="editProfile">\
      <input type="text" name="name" placeholder="Name"><br>\
       <input type="text" name="age" placeholder="Age"><br>\
        <input type="text" name="city" placeholder="City"><br>\
            <input type="text" name="education" placeholder="Education"><br>\
      <input type="text" name="profilePicture" placeholder="Picture URL"><br>\
      <input type="text" name="currentWork" placeholder="Work"><br>\
      <input class="radioButtons" type="radio" name="gender" value="Male"> Male<br>\
     <input class="radioButtons" type="radio" name="gender" value="Female"> Female<br>\
     <input class="radioButtons" type="radio" name="gender" value="Other" checked="checked"> Other<br>\
    <input type="text" name="merits" placeholder="Merits"><br>\
    <input type="text" name="description" placeholder="Description"><br>\
    <input type="submit" value="Update Profile">\
    </form>\
    <button onClick="loadProfile()">Back</button>';

}
function editCompanyProfile(){
    document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <form action="../php/editProfile.php" method="post" id="editProfile">\
      <input type="text" name="company" placeholder="Company"><br>\
      <input type="text" name="companyPicture" placeholder="Picture URL"><br>\
      <input type="text" name="headQuarter" placeholder="HQ"><br>\
      <input type="text" name="orientation" placeholder="Orientation"><br>\
      <input type="text" name="description" placeholder="Description"><br>\
      <input type="submit" value="Update Profile">\
      </form>\
      <button onClick="loadProfile()">Back</button>';
}
function addPosition(){
    document.getElementById("content").innerHTML = '<link rel="stylesheet" type="text/css" href="css/userProfile.css">\
      <form action="../php/addPosition.php" method="post" id="editProfile">\
      <input type="text" name="position" placeholder="Position"><br>\
      <input type="text" name="weeklyHours" placeholder="Working time"><br>\
      <input type="text" name="country" placeholder="Country"><br>\
      <input type="text" name="city" placeholder="City"><br>\
      <input type="text" name="merits" placeholder="Merits"><br>\
      <input type="number" name="freePositions" placeholder="1"><br>\
      <input type="submit" value="Add position">\
      </form>\
      <button onClick="loadProfile()">Back</button>';
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