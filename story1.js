var showSpotify;

$(document).ready(function(){
	var video = document.getElementById('vid');
	video.muted = false;
	$("#spotify").hide();
	showSpotify = setTimeout(spotify, 218000);

	$("#closeBtn").click(function(event) {
		console.log("close");
		window.location.assign("http://localhost:8000/1.html");
	});

});

function spotify(){
	$("#spotify").show();
}