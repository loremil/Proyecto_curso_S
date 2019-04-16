// Slider Acciones recomendadas
cursosApp.controller('sliderAccionesRecomendadas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.parametrosPatrimonio = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      992: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1040: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Acciones recomendadas
