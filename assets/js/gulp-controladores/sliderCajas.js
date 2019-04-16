// Slider cajas
cursosApp.controller('sliderCajas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.ages = 70;
  $scope.monto = 200000;
  $scope.parametrosPatrimonio = {
    slidesPerView: 2,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 2500,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider cajas
