var showSpotify;
var byeNow;

$(document).ready(function(){
	var video = document.getElementById('vid');
	video.muted = false;
	showSpotify = setTimeout(closing, 218000);

	$("#closeBtn").click(function(event) {
		window.stop();
		window.location.assign("http://lendyourear.com/1.html");
	});

});

function closing(){
	var box = document.getElementById("closing");
	box.style.display = "flex";
	byeNow = setTimeout(gooBye,120000);
}

function gooBye(){
	window.location.assign("http://lendyourear.com/");
}