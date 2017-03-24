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
    $('#menu').slideToggle(700);

  });

  $('.btn').click(function(){
    $('#menu').fadeOut(300);
  });

  $('#menu').mouseleave(function(){
    $(this).fadeOut(300);
  });


 

});

