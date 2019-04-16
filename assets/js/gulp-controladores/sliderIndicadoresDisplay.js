// Slider Indicadores Display
cursosApp.controller('sliderIndicadoresDisplay', function($scope, $timeout, $window) {
    var w = angular.element($window);
    $scope.parametrosIndicadores = {
      slidesPerView: 1,
      spaceBetween: 1,
      paginationClickable: true,
      effect: 'coverflow',
      autoplay: 6600,
      speed: 1000,
      pagination: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true,
    };
    $scope.parametrosNotificacion = {
      slidesPerView: 1,
      spaceBetween: 1,
      paginationClickable: true,
      effect: 'fade',
      autoplay: 6600,
      speed: 1000,
      pagination: false,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true,
    };
  });