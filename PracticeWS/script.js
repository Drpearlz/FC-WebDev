$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    })
   })
   var marker = new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
  });
  
  marker.setMap(map);

