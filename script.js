var numpresses = 0;
var time;

var start = true;
var fivesecs = false;
var barTimer;
var first = true;
var colors = ["null", "#f51205","#44ec86"];
var random = Math.floor((Math.random() * 2) + 1);


$(document).ready(function(){
	home();
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

function home(){
	console.log("you're home");
	//reload("wavy");
	//$("body").css("background-image", "url('./gifs/home.gif')");
}



$(document).keypress(function(event){
	if(event.keyCode == 32){
		if((Date.now() - time) > 3000) {
			blinking();
		} else {
			console.log("not yet");
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
		console.log("calling countpress #1");
		start = false;
		time = Date.now();
		console.log(time);
		load();
	}
	numpresses++;
	$("#counter").html("presses: " + numpresses);
	
}

function clearPresses() {
	console.log("calling clearPresses");
	console.log(Date.now());
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
			//window.location.replace("localhost:8000/1.html");
			//window.location.href = 'localhost:8000/1.html';
			//document.location.href = 'localhost:8000/1.html',true;
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
		console.log("blink2");
		//var video = document.getElementById('bgVideo');
		//video.playbackRate = 2.0;
		reload("release");
		$("#text").html("release space to start");
		barBlink();
	}
}


function load(){
	console.log("load!");
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
    	console.log("blink");
        if (bar.style.opacity == "0") {
        	console.log("0");
            bar.style.opacity = "1";
        } else {
        	console.log("1")
            bar.style.opacity = "0"; 
        }
    }
}

function reload(string){
	console.log(string);
	var video = document.getElementById('bgVideo');
	video.src = './vid/' + string +'.mp4';
	video.muted = false;
	video.load();

}
