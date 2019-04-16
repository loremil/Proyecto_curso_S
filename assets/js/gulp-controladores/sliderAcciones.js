cursosApp.controller('sliderAcciones', function($scope) {
  var swiper = new Swiper('#sliderHome', {
    pagination: '#pagination',
    paginationClickable: true,
    slidesPerView: 'auto',
    autoplay: false,
    autoplayDisableOnInteraction: true,
    spaceBetween: 30,
  });
});
