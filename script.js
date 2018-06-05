var numpresses = 0;
var time;

var start = true;
var fivesecs = false;
var barTimer;
var first = true;
var colors = ["null", "#f51205","#44ec86"];
var random = Math.floor((Math.random() * 2) + 1);


$(document).ready(function(){
	$("#indexShow").click(function(event) {
		$("#indexBox").show();
	});

	$("#indexHide").click(function(event) {
		$("#indexBox").hide();
	});

	$("#aboutShow").click(function(event) {
		$("#aboutBox").show();
	});

	$("#aboutHide").click(function(event) {
		$("#aboutBox").hide();
	});

});


$(document).keypress(function(event){
	if(event.keyCode == 32){
		if((Date.now() - time) > 3000) {
			blinking();
		} else {
			countPresses();
		}
	}
});

$(document).keyup(function(event){
	if(event.keyCode == 32){
		clearPresses();
	}
});

function countPresses() {
	if (start) {
		start = false;
		time = Date.now();
		load();
	}
	numpresses++;
	$("#counter").html("presses: " + numpresses);
	
}

function clearPresses() {
	start = true;
	numpresses = 0;
	var diff = (Date.now()) - time;
	$("#counter1").html("time: " + diff);
	if(fivesecs){
		barZero();
		var video = document.getElementById('bgVideo');
		video.muted = false;
		reload("load" + random);
		$('.flex-container').hide();
		$("#indexShow").hide();
		$("#aboutShow").hide();
		var redirect = setTimeout(move, 6000);
		function move(){
			console.log("move here");
			$("body").css("background-color",colors[random]);
			window.location.assign("http://localhost:8000/" + random + ".html");
		}
		//$("#text").html("load sth here");
		fivesecs = !fivesecs;
	} else {
		home();
		barZero();
	}
}
function blinking(){
	if(!fivesecs){
		fivesecs = true;
		//var video = document.getElementById('bgVideo');
		reload("release");
		$("#text").html("release space to start");
		barBlink();
	}
}


function load(){
	reload("load");
	barLoad();
}

function barLoad(){
	var bar = document.getElementById("progressBar"); 
    var width = 1;
    barTimer = setInterval(frame, 30);
    function frame() {
        if (width >= 100) {
            clearInterval(barTimer);
        } else {
            width++; 
            bar.style.width = width + '%'; 
        }
    }
}

function barZero(){
	var bar = document.getElementById("progressBar");
	bar.style.width = 0;
	bar.style.opacity = "1";
	clearInterval(barTimer);
}

function barBlink(){
	
	var bar = document.getElementById("progressBar"); 
    barTimer = setInterval(blink, 500);
    function blink() {
        if (bar.style.opacity == "0") {
            bar.style.opacity = "1";
        } else {
            bar.style.opacity = "0"; 
        }
    }
}

function reload(string){
	var video = document.getElementById('bgVideo');
	video.src = './vid/' + string +'.mp4';
	video.muted = false;
	video.load();

}
