var showSpotify;

$(document).ready(function(){
	var video = document.getElementById('vid');
	video.muted = false;
	$("#closing").hide();
	showSpotify = setTimeout(closing, 218000);

	$("#closeBtn").click(function(event) {
		console.log("close");
		window.stop();
		window.location.assign("http://localhost:8000/1.html");
	});

});

function closing(){
	$("#closing").show();
}