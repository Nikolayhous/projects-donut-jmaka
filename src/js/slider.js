
var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + '/' +slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $('.slider').slick({
    centerMode: true,
    variablewidth: false,
  centerPadding: '0px',
  Infinite: true,
  dots: false,
  speed: 700,
    slidesToShow: 3,
  slidestoscroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'ease',
    swipeToSlide: true,
    useCSS: true,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1279.99,
        settings: {
        arrows: false,
        }
      },
      {
        breakpoint: 767.99,
        settings: {
          centerMode: false,
          dots: false,
          centerPadding: "0px",
          slidesToShow: 1,
        arrows: false,
        }
      }
    ]
});
}

