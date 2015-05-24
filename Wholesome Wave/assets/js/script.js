$( document ).ready(function() {

    $("#menu-icon").click(function(){
        $("#header_nav").slideToggle("slow");
    });

    $("#right_arrow").click(function() {
    	if($('#circle4').hasClass("position1")) {
    		$('#circle4').removeClass("position1");
    		$('#circle4').addClass("position3");
    	} else {
    		$('#circle4').removeClass("position1");
    		$('#circle4').addClass("position3");
    	}

    	if($('#circle3').hasClass("position3")) {
    		$('#circle3').removeClass("position3");
    		$('#circle3').addClass("position2");
    	} else {
    		$('#circle3').removeClass("position3");
    		$('#circle3').addClass("position2");
    	}

    	if($('#circle2').hasClass("position2")) {
    		$('#circle2').removeClass("position2");
    		$('#circle2').addClass("position1");
    	} else {
    		$('#circle2').removeClass("position2");
    		$('#circle2').addClass("position1");
    	}
    });

    $("#left_arrow").click(function() {
    	if($('#circle4').hasClass("position1")) {
    		$('#circle4').removeClass("position1");
    		$('#circle4').addClass("position2");
    	} else {
    		$('#circle4').removeClass("position1");
    		$('#circle4').addClass("position2");
    	}

    	if($('#circle3').hasClass("position3")) {
    		$('#circle3').removeClass("position3");
    		$('#circle3').addClass("position1");
    	} else {
    		$('#circle3').removeClass("position3");
    		$('#circle3').addClass("position1");
    	}

    	if($('#circle2').hasClass("position2")) {
    		$('#circle2').removeClass("position2");
    		$('#circle2').addClass("position3");
    	} else {
    		$('#circle2').removeClass("position2");
    		$('#circle2').addClass("position3");
    	}
    });

});