function loadFollowers() {
				$.ajax({
				 			url: "../php/friends.php",
				    type: "GET",
				    dataType:"json",
				    success: function(data) {
							    	var retString = '<ul>';
							    	for(var i = 0; i < data.length; i++) {
							    					retString += '<li class="followingCell">\
							    					<div>\
																	<p onClick="loadProfile(\'' + data[i].followingMail + '\')">' + data[i].name + '</p>\
																</div>\
																<div>\
																	<p>You have been a follower since</p>\
																	<p>' + data[i].date + '</p>\
																</div>\
																<div>\
																	<button onClick="removeFollow(\'' + data[i].followingMail + '\')">Unfollow</button>\
																</div>\
																</li>';
							    	}
							    	retString += '</ul>';
							    	document.getElementById("search").innerHTML = '<form onsubmit="return searchFollowers()">\
        				<input id="searchField" type="text" name="search" placeholder="Filter friends"><input id="submitSearch" type="submit" onClick="searchFollowers()" value="Go!">\
        				</form>';
												document.getElementById("content").innerHTML = retString;
								}
				});
}

function removeFollow(unfollow) {
				if (confirm("Are you sure you want to remove " + unfollow + "?")) {
    	$.ajax({
						url: "../php/removeFriend.php",
						type: "POST",
						data: {data:unfollow},
						success: function(data) {
										loadFollowers();
						}
				});
				} else {
 
				}
}

function searchFollowers() {
	var searchStr = document.getElementById("searchField").value;
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
				<button onClick="removeFriend(\'' + data[i].followingMail + '\')">Unfriend</button>\
				</li>';
			}
			retStr += '</ul></div>';
			document.getElementById("content").innerHTML = retStr;
		}
	});
	return false;
}