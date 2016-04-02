function loadFilledPositions() {
	$.ajax({
		url: "../php/filledPositions.php",
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retString = '<div id="container"><ul>';
			for(var i = 0; i < data.length; i++) {
				retString += '<li class="filledPositions">\
  	  				<div id="companyLogo">' + data[i].companyPicture + '</div>\
					<div id="companyName">\
						<p class="companyTitle">' + data[i].company + '</p>\
					</div>\
					<div id="positionContainer">\
						<p class="position">' + data[i].position + '</p>\
					</div>\
					<div id="hoursContainer">\
						<p class="hours">' + data[i].weeklyHours + '</p>\
					</div>\
					<div id="dateContainer">\
						<p class="date">' + data[i].date + '</p>\
					</div>\
					</li>';
			}
  	 		retString += '</ul></div>';
  	 		document.getElementById("search").innerHTML = '<form id="filledPositionsSearchForm">\
        				<input id="searchField" type="search" name="search" placeholder="Filter filled positions">\
        				<button id="submitSearch" type="button" onClick="searchFilledPositions(document.getElementById(\'searchField\').value">Go!</button>\
        				</form>';
  			document.getElementById("content").innerHTML = retString;
		}
		
	});
}

function searchFilledPositions(searchStr) {
	$.ajax({
		url: "../php/sfp.php",
		data: { data: searchStr },
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retString = '<div id="container"><ul>';
			for(var i = 0; i < data.length; i++) {
				retString += '<li class="filledPositions">\
  	  				<div id="companyLogo">' + data[i].companyPicture + '</div>\
					<div id="companyName">\
						<p class="companyTitle">' + data[i].company + '</p>\
					</div>\
					<div id="positionContainer">\
						<p class="position">' + data[i].position + '</p>\
					</div>\
					<div id="hoursContainer">\
						<p class="hours">' + data[i].weeklyHours + '</p>\
					</div>\
					<div id="dateContainer">\
						<p class="date">' + data[i].date + '</p>\
					</div>\
					</li>';
			}
			retString += '</ul></div>';
			document.getElementById("content").innerHTML = retString;
		}
	});
}