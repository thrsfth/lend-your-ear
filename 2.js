var imgShow;
var toVideo;
var showing;
var fadedin = false;
var click = 0;
var bgChange;
var gifBye;
var promptShow;

$(document).ready(function(){
    gifBye = setTimeout(toImg, 3400);
    /*
	imgShow = setTimeout(show, 3100);
    //promptShow = setTimeout(show("prompt"), 3100);
    //holdShow = setTimeout(show("hold"), 6000);

	$("#icon").click(function(event) {
        if(fadedin){
            click++;
            //flash();
            console.log(click);
        	//$("#image").attr('src', './01/after.png');
            if(click%2 == 0 && click <=6){
                $("#icon").attr('src', './01/' + click + '.png');
            }
            if(click == 6){
                console.log("redirect" + click);
                toVideo = setTimeout(redirect,1000);
            }
        }
    });
*/
});

$(document).keypress(function(event){
    if(event.keyCode == 32){
        window.location.assign("http://localhost:8000/index.html");
    }
});

/*
function show() {
    var x = document.getElementById("imageBox"); 
    var opacity = 0;
    showing = setInterval(fadein, 30);
    function fadein() {
        if (x.style.opacity >= 1) {
            fadedin = true;
            clearInterval(showing);
        } else {
            opacity+=.01; 
            x.style.opacity = opacity; 
        }
    }
}

function redirect() {
    window.location.assign("http://localhost:8000/story1.html");
}

function flash(){
    $("body").css("background-image", "url('./01/flash.gif')");
    bgChange = setTimeout(resetBG,600);

}

function resetBG(){
    $("body").css("background-image", 'none');
}
*/

function toImg(){
    document.getElementById("fbody").src= "/02/30secs.png" ;
    $("body").css("background-color", '#006bff');
    document.getElementById("franceVid").style.display= "none";
    //$("body").css("background-image", "url('./01/30secs.png')");
}

