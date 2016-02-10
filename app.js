hj(function (){
  "use strict";

   var Moosipurk = function(){

     //SINGLETON PATTERN
   if(Moosipurk.instance){

       return Moosipurk.instance;
     }

Moosipurk.instance = this; // this viitab Moosipurgile

       console.log(this);
  //   console.log('Moosipurgi sees');

 //Koik muutujad mis on uldiselt
 this.click_count = 0;

  //panen rakenduse toole
    this.event;
   };

//koik moosipurgi finktsioonid tulevad siia sisse
Moosipurk.prototype = {
        init: function (){
          console.log("Rakendus kaivitus");
          //hakkkame kuulama hiireklopse
        //  this.bindMouseEvents();

        },
        bindMouseEvent: function (){
          //querySelector - saadab kätte nuppu
          document.querySelector(".add-new-jar").addEventListener("click", this.addNewClick.bind(this));
        },
        addNewClick: function (event){
          console.log(event);

          this.click_count++;
          console.log(this.click_count);
        }
};


 window.onload = function(){
    var app = new Moosipurk;

 };

})();
