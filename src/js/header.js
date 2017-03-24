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
    $('#menu').fadeIn(200);
  });

  // $('.btn').click(function(){
  //   $('#menu').fadeOut();
  // });

  // $('#menu').mouseleave(function(){
  //   $(this).fadeOut();
  // });


  function display_hide (menu) 
{ 
    if ($('#menu').css('display') == 'none') 
        { 
            $('#menu').fadeIn(200); 
        } 
    else 
        {     
            $('#menu').fadeOut(); 
        } 
} 


});

