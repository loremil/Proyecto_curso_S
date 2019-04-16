
// Slider Noticias recomendadas
cursosApp.controller('sliderNoticiasRecomendadas', function($scope, $timeout, $window) {
  var w = angular.element($window);
  $scope.noticiasRecomendadas = {
    slidesPerView: 3,
    spaceBetween: 1,
    paginationClickable: true,
    effect: 'slide',
    autoplay: 2500,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 1,

      },
      991: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    }
  };
});
// Fin Slider Noticias recomendadas
