var showSpotify;

$(document).ready(function(){
	var video = document.getElementById('vid');
	video.muted = false;
	showSpotify = setTimeout(closing, 230000);

	$("#closeBtn").click(function(event) {
		window.stop();
		window.location.assign("http://localhost:8000/2.html");
	});

});

function closing(){
	var box = document.getElementById("closing");
	box.style.display = "flex";
}