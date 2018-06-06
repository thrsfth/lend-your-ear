var imgShow;
var toVideo;
var showing;
var fadedin = false;
var bgChange;
var gifBye;
var promptShow;
var egg = [119,104,97,116,116,104,101,102];
var letter = ["w","h","a","t","t2","h2","e","f"];
var eggB = [87,72,65,84,84,72,69,70];
var sequence = false;
var num = 0;
var whatShow;
var whatshowing;
var hshowing;

$(document).ready(function(){
    gifBye = setTimeout(toImg, 3300);
	imgShow = setTimeout(show, 3100);
    whatShow = setTimeout(whats,3100);
    promptShow = setTimeout(hold, 7000);

});

$(document).keypress(function(event){
    if(event.keyCode == 32){
        window.location.assign("http://lendyourear.com/index.html");
    }
    if(event.keyCode == (egg[num] || eggB[num])){
        var dis = document.getElementById(letter[num]);
        dis.style.opacity = 1;
        if(num%2 == 1){
            $("#icon").attr('src', './02/' + letter[num] + '.png');
        } else {
        $("body").css("background-image", "url('./02/background"+letter[num]+".PNG')");
        }
        num++;
    }
    if(num==7){
        var go = setTimeout(redirect, 2000);
    }

});

function visible(string) {
    $(string).removeClass("transp");
}

function show() {
    var x = document.getElementById("icon"); 
    var y = document.getElementById("prompt");
    var opacity = 0;
    showing = setInterval(fadein, 30);
    function fadein() {
        if (x.style.opacity >= 1) {
            fadedin = true;
            clearInterval(showing);
        } else {
            opacity+=.01; 
            x.style.opacity = opacity;
            y.style.opacity = opacity; 
        }
    }
}

function hold(){
    var x = document.getElementById("hold");
    var opacity = 0;
    hshowing = setInterval(fadein, 30);
    function fadein() {
        if (x.style.opacity >= 1) {
            fadedin = true;
            clearInterval(hshowing);
        } else {
            opacity+=.01; 
            x.style.opacity = opacity;
        }
    }
}


function whats(){
    var x = document.getElementsByClassName("dis");
    var opacity = 0;
    whatshowing = setInterval(fadein, 30);
    function fadein() {
        for(var i = 0; i<8;i++){
            if (x[i].style.opacity >= .5) {
                clearInterval(whatshowing);
            } else {
                x[i].style.opacity = opacity;
            }
            if(i==7){
                opacity+=.01; 
            }
        }
    }
}


function redirect() {
    window.location.assign("http://lendyourear.com/story2.html");
}

/*
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

