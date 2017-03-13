$(document).ready(function(){

	$(".left").boxLoader({
	    direction:"x",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "1.5s",
	    windowarea: "50%"
	});

	$(".right").boxLoader({
	    direction:"x",
	    position: "-50%",
	    effect: "fadeIn",
	    duration: "1.5s",
	    windowarea: "50%"
	});

	$(".shrink").boxLoader({
		    direction:"y",
		    position: "50%",
		    effect: "fadeIn",
		    duration: "1.5s",
		    windowarea: "50%"
	});

	$(".shrink2").boxLoader({
	    direction:"y",
	    position: "50%",
	    effect: "fadeIn",
	    duration: "1.5s",
	    windowarea: "50%"
	});

	$("#creative").boxLoader({
	    direction:"x",
	    position: "100%",
	    effect: "fadeIn",
	    duration: "3s",
	    windowarea: "50%"
	});

	$("#mode").boxLoader({
	    direction:"none",
	    position: "none",
	    effect: "fadeIn",
	    duration: "1s",
	    windowarea: "50%"
	});

	$(".up i").click(scroll);

});


function scroll(){

	$("html, body").animate({
        scrollTop: $("section").offset().top
    }, {
    	queue: false,
    	duration: 1000});

}