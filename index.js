var numberofdrumbuttons =document.querySelectorAll(".drum").length;

for(var i =0; i<numberofdrumbuttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttoninnerHTML = this.innerHTML;

    makeSound(buttoninnerHTML);
    buttonAnimations(buttoninnerHTML);
  });

}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimations(event.key);


});

function makeSound(key){

    switch (key) {
      case "w":
         var crash = new Audio('sounds/crash.mp3');
         crash.play();
         break;
      case "a":
         var kickbass = new Audio('kick-bass.mp3');
         kickbass.play();
         break;
      case "s":
         var snare = new Audio('snare.mp3');
         snare.play();
         break;
      case "d":
         var tom1 = new Audio('tom-1.mp3');
         tom1.play();
         break;
      case "j":
         var tom2 = new Audio('tom-2.mp3');
         tom2.play();
         break;
      case "k":
         var tom3 = new Audio('tom-3.mp3');
         tom3.play();
         break;
     case "l":
         var tom4 = new Audio('/tom-4.mp3');
         tom4.play();
         break;







      default: console.log(buttoninnerHTML);

    }

}

function buttonAnimations(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);


}
