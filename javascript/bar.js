function loadBar() {
	document.getElementById("bar").innerHTML = '<div id="navButtons">\
	<a onClick="loadProfile()"><button id="profile" class="barButton" type="button">Profile</button></a><a onClick="loadOpenPositions()"><button id="openPositions" class="barButton" type="button">Open positions</button></a><a onClick="loadFilledPositions()"><button id="filledPositions" class="barButton" type="button">Filled positions</button></a><a onClick="loadFriends()"><button id="friends" class="barButton" type="button">Friends</button></a>\
</div>\
<div id="search">\
	<form action="search.php" method="get">\
	 <input id="searchField" type="search" name="search" placeholder="Find people/organizations"><input id="submitSearch" type="submit" value="Go!">\
	</form>\
</div>';
}