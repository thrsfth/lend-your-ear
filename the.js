(function() {
    'use strict';
    var $ = function(id) { return document.getElementById(id); };
    var countries = ["Country1","Country2","Country3","Country4","Country5"];

    window.onload = function(){
        haha();
    };

    function haha(){
        $("button").onclick = random;

    }

    function random(){
        var i = Math.floor(Math.random() * 5);
        //$("check").innerHTML = "country number" +i;
        window.location.href = "file:///Users/Faith/Documents/skeleton/"+countries[i]+".html";
    }


    document.getElementById("myBtn").addEventListener("click", displayDate);
    //function myFunction(event) {
        //var x = event.key;
        //document.getElementById("spacebar").innerHTML = "The pressed key was: " + x;
      //}

  })();
