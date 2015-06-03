//FUNCTION TO THE CSS RULE

function checkSize(){
    if ($(".main_container").css("width") === "320px" ) {
        // console.log("320");
    } else if ($(".main_container").css("width") === "480px" ) {
    	// console.log("480");
    } else if ($(".main_container").css("width") === "768px" ) {
    	// console.log("768");
    } else {
    	// console.log("ELSE");
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




$(document).ready(function() {
       
// Init ScrollMagic
    var controller_768_1 = new ScrollMagic.Controller();

    var desktopTween1 = new TimelineMax()
    .add(TweenMax.to($('#animated_text_1'), 0.5, {css:{rotationX: 0}, immediateRender:true}))
    .add([
        TweenMax.to($('#animated_text_3'), 0.1, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_3'), 0.5, {css:{top: 75}, immediateRender:true})
    ])
    .add(TweenMax.to('#animated_text_4', 0.5, {css:{left: 205}, immediateRender:true}));

    new ScrollMagic.Scene({
        triggerElement: '.group_text_1'
    })

    .setTween(desktopTween1)
    .addIndicators()
    .addTo(controller_768_1);


// Init ScrollMagic
    var controller_768_2 = new ScrollMagic.Controller();

    var desktopTween2 = new TimelineMax()
    .add([
        TweenMax.to($('#animated_text_5'), 0.3, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_5'), 0.7, {css:{top: 70}, immediateRender:true})
    ])
    .add(TweenMax.to('#animated_text_6', 0.5, {css:{right: 230}, immediateRender:true}))
    .add([
        TweenMax.to($('#animated_text_7'), 0.3, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_7'), 0.5, {css:{top: 115}, immediateRender:true})
    ])
    .add([
        TweenMax.to($('#animated_text_8'), 0.3, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_8'), 0.5, {css:{left: 255}, immediateRender:true})
    ])
    .add(TweenMax.to('#animated_text_9', 0.5, {css:{right: 175}, immediateRender:true}))
    .add(TweenMax.to('#animated_text_10', 0.7, {css:{rotationX: 0}, immediateRender:true}))
    .add([
        TweenMax.to($('#animated_text_11'), 0.3, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_11'), 0.5, {css:{left: 250}, immediateRender:true})
    ])
    .add(TweenMax.to('#animated_text_12', 0.5, {css:{rotationX: 0}, immediateRender:true}))
    .add([
        TweenMax.to($('#animated_text_13'), 0.3, {css:{opacity: 1}, immediateRender:true}),
        TweenMax.to($('#animated_text_13'), 0.5, {css:{top: 295}, immediateRender:true})
    ]);

    new ScrollMagic.Scene({
        triggerElement: '.group_text_2'
    })

    .setTween(desktopTween2)
    .addIndicators()
    .addTo(controller_768_2);


});





// var pinScene = new ScrollMagic.Scene({
//        triggerElement: '.group_text_1',
//        duration: 500
//    })
//    .setPin('#animated_text_2')
//    .addIndicators()
//    .addTo(controller);


// $(document).ready(function() {
//         var controller = $.superscrollorama({
//             isVertical: true,
//             triggerAtCenter: false,
//             playoutAnimations: true,
//             reverse: true
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_1'), 1, 
//                 {css:{rotationX: -90}, immediateRender:true}, 
//                 {css:{rotationX: 0}})
//             )
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_3'), 1, 
//                 {css:{top: 31}, immediateRender:true}, 
//                 {css:{top: 62}})
//             ),
//             offset: 250
//         });

//         controller.pin($('#group_text_1'), 200, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_4'), 1, 
//                 {css:{left: -450}, immediateRender:true}, 
//                 {css:{left: 195}})
//             ),
//             offset: 200
//         });

//         controller.pin($('#group_text_1'), 200, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_5'), 1, 
//                 {css:{opacity: 0}, immediateRender:true}, 
//                 {css:{opacity: 1}})
//             )
//             .append(
//               TweenMax.fromTo($('#animated_text_5'), 0.5, 
//                 {css:{top: -35}, immediateRender:true}, 
//                 {css:{top: 0}})
//             ),
//             offset: 500
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_6'), 1, 
//                 {css:{right: -300}, immediateRender:true}, 
//                 {css:{right: 230}})
//             ),
//             offset: 750
//         });

//         controller.pin($('#group_text_1'), 200, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_7'), 0.5, 
//                 {css:{opacity: 0}, immediateRender:true}, 
//                 {css:{opacity: 1}})
//             )
//             .append(
//               TweenMax.fromTo($('#animated_text_7'), 1, 
//                 {css:{top: 113}, immediateRender:true}, 
//                 {css:{top: 43}})
//             ),
//             offset: 900
//         });

//         controller.pin($('#group_text_1'), 200, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_8'), 1, 
//                 {css:{opacity: 0}, immediateRender:true}, 
//                 {css:{opacity: 1}})
//             )
//             .append(
//               TweenMax.fromTo($('#animated_text_8'), 1, 
//                 {css:{left: 0}, immediateRender:true}, 
//                 {css:{left: 237}})
//             ),
//             offset: 1100
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_9'), 1, 
//                 {css:{right: -355}, immediateRender:true}, 
//                 {css:{right: 214}})
//             ),
//             offset: 1350
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_10'), 1, 
//                 {css:{rotationX: -90}, immediateRender:true}, 
//                 {css:{rotationX: 0}})
//             ),
//             offset: 1450
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_11'), 0.5, 
//                 {css:{opacity: 0}, immediateRender:true}, 
//                 {css:{opacity: 1}})
//             )
//             .append(
//               TweenMax.fromTo($('#animated_text_11'), 1, 
//                 {css:{left: -30}, immediateRender:true}, 
//                 {css:{left: 230}})
//             ),
//             offset: 1500
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_12'), 1, 
//                 {css:{rotationX: -90}, immediateRender:true}, 
//                 {css:{rotationX: 0}})
//             ),
//             offset: 1700
//         });

//         controller.pin($('#group_text_1'), 100, {
//           anim: (new TimelineLite())
//             .append(
//               TweenMax.fromTo($('#animated_text_13'), 0.05, 
//                 {css:{opacity: 0}, immediateRender:true}, 
//                 {css:{opacity: 1}})
//             )
//             .append(
//               TweenMax.fromTo($('#animated_text_13'), 1, 
//                 {css:{top: 95}, immediateRender:true}, 
//                 {css:{top: 245}})
//             ),
//             offset: 1900
//         });


//     });











