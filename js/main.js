

var messages=["Listening to music constantly","Automating 5 minute tasks obsessive","Watching the same shows in repeat", "Resident Technology Bas<span class='blur'>tar</span>d"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("subtitle").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("subtitle").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h1")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =1.5*messages[rank].length/25.5; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(1000, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}