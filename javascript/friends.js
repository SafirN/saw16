function loadFriends() {
				$.ajax({
				    url: "../php/friends.php",
				    type: "GET",
				    dataType:"json",
				    success: function(data) {
							    	var retString = '<link rel="stylesheet" type="text/css" href="css/friends.css"><div id="container"><ul id="friendList">';
							    	for(var i = 0; i < data.length; i++) {
							    					retString += '<li class="friendCell">\
																<p class="friendName">' + data[i].name + '</p>\
																<p class="date"> Friends since: ' + data[i].date + '</p>\
																<button onClick="removeFriend(\'' + data[i].friendMail + '\')">Unfriend</button>\
																</li>';
							    	}
							    	retString += '</ul></div>';
							    	document.getElementById("search").innerHTML = '<form id="friendSearchForm">\
        				<input id="searchField" type="search" name="search" placeholder="Filter friends"><button id="submitSearch" type="button" onClick="searchFriends(document.getElementById(\'searchField\').value)">Go!</button>\
        				</form>';
												document.getElementById("content").innerHTML = retString;
								}
				});
}

function removeFriend(unfriend) {
				if (confirm("Are you sure you want to remove " + unfriend + "?")) {
    	$.ajax({
						url: "../php/removeFriend.php",
						type: "POST",
						data: {data:unfriend},
						success: function(data) {
										loadFriends();
						}
				});
				} else {
 
				}
}

function searchFriends(searchStr) {
	$.ajax({
		url: "../php/sf.php",
		data: { data: searchStr },
		type: "GET",
		dataType: "json",
		success: function(data) {
			var retStr = '<link rel="stylesheet" type="text/css" href="css/friendSearchResults.css"><div id="container"><ul>';
			for(var i = 0; i < data.length; i++) {
				retStr += '<li class="friendCell">\
				<p class="friendName">' + data[i].name + '</p>\
				<p class="date"> Friends since: ' + data[i].date + '</p>\
				<button onClick="removeFriend(\'' + data[i].friendMail + '\')">Unfriend</button>\
				</li>';
			}
			retStr += '</ul></div>';
			document.getElementById("content").innerHTML = retStr;
		}
	});
}