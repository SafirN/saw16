function loadOpenPositions(company) {
  $.ajax({
    url: "../php/openPositions.php",
    type: "POST",
    dataType:"json",
    data: {company: company},
    success: function(data) {
     var retString = '<ul>';
     for(var i = 0; i < data.length; i++) {
        retString += '<li class="openPositionsCell">\
        <div class="apply"><button class="applyButton" onClick="applyButton(\'' + data[i].company  +'\',\'' + data[i].position + '\')">Apply!</button>\</div>\
        <div><img class="pic" src="img/default2.jpg" alt="Love me!"><p>' + data[i].company +'</p></div>\
        <div><p>Position</p><p>' + data[i].position + '</p></div>\
        <div><p>Country</p><p>' + data[i].country + '</p></div>\
        <div><p>City</p><p>' + data[i].city + '</p></div>\
        <div><p>Hours</p><p>' + data[i].weeklyHours + '</p></div>\
        <div><p>Merits</p><p>' + data[i].merits + '</p></div>\
        <div><p>Starting</p><p>' + data[i].datetime + '</p></div>\
        <div><p>Description</p><p>' + data[i].description + '</p></div>\
        </li>';
     }
     retString += '</ul>';
    document.getElementById("search").innerHTML = '<form onsubmit="return searchOpenPositions()">\
      <input id="searchField" type="text" name="search" placeholder="Filter open positions"><input id="submitSearch" type="submit" onClick="searchOpenPositions()" value="Go!">\
      </form>';
    document.getElementById("content").innerHTML = retString;
    }
  });
}

function applyButton(company, position){
 $.ajax({
    url: "../php/applyPosition.php",
    type: "POST",
    dataType: "json",
    data: {company: company, position: position},
    success: function(data){
      alert(data);
    }
  });
}

function searchOpenPositions() {
  var searchStr = document.getElementById("searchField").value;
  $.ajax({
    url: "../php/sop.php",
    data: { data: searchStr },
    type: "GET",
    dataType: "json",
    success: function(data) {
      var retString = '<ul>';
      for(var i = 0; i < data.length; i++) {
        retString += '<li class="openPositionsCell">\
        <div class="apply"><button class="applyButton" onClick="applyButton(\'' + data[i].company  +'\',\'' + data[i].position + '\')">Apply!</button>\</div>\
        <div><img class="pic" src="img/default2.jpg" alt="Love me!"><p>' + data[i].company +'</p></div>\
        <div><p>Position</p><p>' + data[i].position + '</p></div>\
        <div><p>Country</p><p>' + data[i].country + '</p></div>\
        <div><p>City</p><p>' + data[i].city + '</p></div>\
        <div><p>Hours</p><p>' + data[i].weeklyHours + '</p></div>\
        <div><p>Merits</p><p>' + data[i].merits + '</p></div>\
        <div><p>Description</p><p>' + data[i].description + '</p></div>\
        </li>';
      }
      retString += '</ul>';
      document.getElementById("search").innerHTML = '<form onsubmit="return searchOpenPositions()">\
                <input id="searchField" type="text" name="search" placeholder="Filter filled positions"><input id="submitSearch" type="submit" onClick="searchOpenPositions() value="Go!")">\
                </form>';
      document.getElementById("content").innerHTML = retString;
    }
  });
  return false;
}
