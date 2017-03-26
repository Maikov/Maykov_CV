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
    $('nav').addClass('menu');
    $('.menu').slideToggle(500); 
    return false;
  });  
  
  $('.btn').click(function(){
    $('.menu').fadeOut(300);
  });

  $('.menu').mouseleave(function(){
    $('.menu').fadeOut(300);
  });

});
