$(document).ready(function(){

  $('.project-card__link a, .project-card__description a').click(function(event){
      event.stopPropagation();
  });

  $('.row.project-card').on('click',function(){
    var a = $(this).attr('data-target');
    var b = $(a).find('.portfolio-slider')
    var slickParam = {
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true
          };
    setTimeout(function(){
      $(a).find('.portfolio-slider').each(function(){
        if (!$(this).hasClass('slick-initialized')) {
          b.slick(slickParam);
        } 
        else if ($(this).hasClass('slick-initialized')) {
          b.slick('destroy');
          b.slick(slickParam);
        }
      });
    }, 200);
  });

})