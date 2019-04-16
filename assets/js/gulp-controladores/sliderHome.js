cursosApp.controller('sliderHome', function($scope) {
  var swiper = new Swiper('#sliderHome', {
    pagination: '#pagination',
    paginationClickable: true,
    slidesPerView: 'auto',
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    spaceBetween: 30,
  });
});
