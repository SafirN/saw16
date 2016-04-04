function loadFilledPositions() {
	$.ajax({
		url: "../php/filledPositions.php",
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retString = '<ul>';
			for(var i = 0; i < data.length; i++) {
				retString += '<li class="filledPositionsCell">\
    			<div><img class="pic" src=\'' + data[i].companyPicture + '\' alt="Love me!"><p>' + data[i].company + '</p></div>\
			    <div><p>Position</p><p>' + data[i].position + '</p></div>\
			    <div><p>Hours</p><p>' + data[i].weeklyHours + '</p></div>\
			    <div><p>Starting</p><p>' + data[i].date + '</p></div>\
				</li>';
			}
  	 		retString += '</ul>';
  	 		document.getElementById("search").innerHTML = '<form onsubmit="return searchFilledPositions()">\
        				<input id="searchField" type="text" name="search" placeholder="Filter filled positions"><input id="submitSearch" type="submit" onClick="searchFilledPositions()" value="Go!")>\
        				</form>';
  			document.getElementById("content").innerHTML = retString;
		}
	});
}

function searchFilledPositions() {
	var searchStr = document.getElementById("searchField").value;
	$.ajax({
		url: "../php/sfp.php",
		data: { data: searchStr },
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retString = '<ul>';
			for(var i = 0; i < data.length; i++) {
				retString += '<li class="filledPositionsCell">\
    			<div><img class="pic" src=\'' + data[i].companyPicture + '\' alt="Love me!"><p>' + data[i].company + '</p></div>\
			    <div><p>Position</p><p>' + data[i].position + '</p></div>\
			    <div><p>Hours</p><p>' + data[i].weeklyHours + '</p></div>\
			    <div><p>Starting</p><p>' + data[i].date + '</p></div>\
				</li>';
			}
			retString += '</ul>';
			document.getElementById("search").innerHTML = '<form onsubmit="return searchFilledPositions()">\
        				<input id="searchField" type="text" name="search" placeholder="Filter filled positions"><input id="submitSearch" type="submit" onClick="searchFilledPositions()" value="Go!")>\
        				</form>';
			document.getElementById("content").innerHTML = retString;
		}
	});
	return false;
}