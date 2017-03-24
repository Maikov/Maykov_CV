	// HEADER

$(document).ready(function() {
  
// FOTO

  $('.foto').mouseenter(function(){
    $('#name').css('color','#fa8e0a');
  });

  $('.foto').mouseleave(function(){
    $('#name').css('color','#fff');
  });

// MENU

	$('#hum').click(function(){
    $('nav').addClass('menu_mob');
    $('.menu_mob').slideToggle(500);
  });

  $('.btn').click(function(){
    $('.menu_mob').fadeOut(300);
  });

  // $('.menu_mob').mouseleave(function(){
  //   $('.menu_mob').fadeOut(300);
  // });
 

});

