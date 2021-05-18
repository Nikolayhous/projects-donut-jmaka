
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
  centerMode: false,
  centerPadding: '50px',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidestoscroll:1,
  adaptiveHeight: false,
  autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 767.99,
        settings: {
          centerMode: false,
          dots: false,
          centerPadding: "0px",
        slidesToShow: 1,
        }
      }
    ]
});
}

