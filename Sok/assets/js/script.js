//FUNCTION TO THE CSS RULE

function checkSize(){
    if ($(".main_container").css("width") === "320px" ) {
        // console.log("ONe");
    } else if ($(".main_container").css("width") === "480px" ) {
    	// console.log("Twooos");
    } else if ($(".main_container").css("width") === "768px" ) {
    	// console.log("threrwes");
    } else {
    	// console.log("Fsdfouasodrs");
    }
}

$(document).ready(function() {

    // RUN TEST ON INITIAL PAGE LOAD
    checkSize();

    // RUN TEST ON RESIZE OF THE WINDOW
    $(window).resize(checkSize);

    // SHOW BUTTON ACTIONS

    $("#show_off").click(function(){
    	$(this).css(
    		"display", "none"
    	);

    	$('body').css(
    		'background-image', 'url(assets/img/colored_background_2.jpg)'
    	);

    });
});
