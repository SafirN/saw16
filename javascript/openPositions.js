function loadOpenPositions() {
  $.ajax({
    url: "../php/openPositions.php",
    type: "GET",
    dataType:"json",
    success: function(data) {
     var retString = "";
     for(int i = 0, i < data.length; i+=1) {
          retString += '<link rel="stylesheet" type="text/css" href="css/positions.css">\
           <div id="container">\
            <ul>\
           <li class="positionList">\
            <div id="companyLogo">\
             Logo\
            </div>\
           <div id="companyName">\
             <p class="companyTitle">' + data.company[i] +'</p>\
           </div>\
           <div id="positionContainer">\
             <p class="position">' + data.position[i] + '</p>\
           </div>\
             <div id="infoTitles">\
              <p class="infoTitle"> Country: </p>\
              <p class="infoTitle"> City: </p>\
              <p class="infoTitle"> Weekly Hours: </p>\
              <p class="infoTitle"> Merits: </p>\
             </div>\
             <div id="infoText">\
             <p class="infoText">' + data.country[i] + '</p>\
             <p class="infoText">' + data.city[i] + '</p>\
             <p class="infoText">' + data.weeklyHours[i] + '</p>\
             <p class="infoText">' + data.merits[i] + '</p>\
            </div>\
            <div id="descriptionContainer">\
            <p class="descriptionText"> <strong>Description:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor quiis unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor qui  in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\
           </p>\
            </div>\
            <button id="applyButton">Apply!</button>\
           </li>\
            </div>\
           </div>\
          </ul>';


      document.getElementById("content").innerHTML = retString;
    }
  });
}

var retString;


}