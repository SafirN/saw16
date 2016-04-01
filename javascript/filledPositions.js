function loadFilledPositions() {
	$.ajax({
		url: "../php/filledPositions.php",
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retString = '<link rel="stylesheet" type="text/css" href="css/filledPositions.css"><div id="container"><ul>';
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
  	 		document.getElementById("search").innerHTML = '<form action="search.php" method="get">\
 	 			<input id="searchField" type="search" name="search" placeholder="Filter filled positions"><input id="submitSearch" type="submit" value="Go!">\
 	 			</form>';
  				document.getElementById("content").innerHTML = retString;
		}
		
	});
}