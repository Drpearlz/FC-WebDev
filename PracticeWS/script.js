$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    })
   })
   function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Jay Doe");
    if (person == null || person == "") {
      txt = "";
    } else {
      txt = "Hello " + person + "!\nHow are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
  };