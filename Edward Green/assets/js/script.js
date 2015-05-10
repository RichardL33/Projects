$(document).ready(function() {

// LEFT/RIGHT MENU ANIMATIONS

    $('#left-menu').sidr({
      name: 'sidr-left',
      side: 'left' // By default
    });
    $('#right-menu').sidr({
      name: 'sidr-right',
      side: 'right'
    });

// HERO TEXT ANIMATION - ONLOAD

	setTimeout(function(){
      $("#hero_divider").animate({
        width: "50%",
        opacity: 1.0,
      }, 1000);
	}, 900);

// SCROLL BACK TO TOP - ANIMATION - SMOOTH SCROLL

$(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#back_top').fadeIn('slow');
        } else {
            $('#back_top').fadeOut('slow');
        }
    });
    $('#back_top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        //$("html, body").scrollTop(0); //For without animation
        return false;
    });

});