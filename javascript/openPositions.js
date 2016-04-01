function loadOpenPositions(company) {
  $.ajax({
    url: "../php/openPositions.php",
    type: "POST",
    dataType:"json",
    data: {company: company},
    success: function(data) {
     var retString = '<link rel="stylesheet" type="text/css" href="css/positions.css"><div id="container"><ul>';
     for(var i = 0; i < data.length; i++) {
          retString += '<li class="positionList">\
            <div id="companyLogo">\
             Logo\
            </div>\
           <div id="companyName">\
             <p class="companyTitle">' + data[i].company +'</p>\
           </div>\
           <div id="positionContainer">\
             <p class="position">' + data[i].position + '</p>\
           </div>\
             <div id="infoTitles">\
              <p class="infoTitle"> Country: </p>\
              <p class="infoTitle"> City: </p>\
              <p class="infoTitle"> Weekly Hours: </p>\
              <p class="infoTitle"> Merits: </p>\
             </div>\
             <div id="infoText">\
             <p class="infoText">' + data[i].country + '</p>\
             <p class="infoText">' + data[i].city + '</p>\
             <p class="infoText">' + data[i].weeklyHours + '</p>\
             <p class="infoText">' + data[i].merits + '</p>\
            </div>\
            <div id="descriptionContainer">\
            <p class="descriptionText"> <strong>Description:</strong> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor quiis unde omnis iste natus error sit voluptatem accusantium dolor qui is unde omnis iste natus error sit voluptatem accusantium dolor qui  in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\
           </p>\
            </div>\
            <button id="applyButton">Apply!</button>\
           </li>';
     }
     retString += '</ul></div>';
      document.getElementById("search").innerHTML = '<form action="search.php" method="get">\
      <input id="searchField" type="search" name="search" placeholder="Filter open positions"><input id="submitSearch" type="submit" value="Go!">\
      </form>';
      document.getElementById("content").innerHTML = retString;
    }
  });
}