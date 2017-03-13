//PARALLAX

jQuery(document).ready(function(){
    $objWindow = $(window);
    $('section[data-type="background"]').each(function(){
        var $bgObj = $(this);
        $(window).scroll(function() {
            var yPos = -($objWindow.scrollTop() / $bgObj.data('speed'));
            var coords = '100% '+ yPos + 'px';
            $bgObj.css({ backgroundPosition: coords });
            // console.log($bgObj);
        });
    });
});


//SCROOL LINKS
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.skills').fadeIn(1500);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()>1400){
        $('.education').fadeIn(1500);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()>2300){
        $('.portfolio').fadeIn(1500);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()>2900){
        $('.interests').fadeIn(1500);
    }
});

$(window).scroll(function(){
    if($(window).scrollTop()>3700){
        $('.contacts').fadeIn(1500);
    }
});