/* INICIO SLIDER ENCUESTA SATISFACCION */
cursosApp.controller('sliderEncuestaSatisfaccion', function ($scope, $timeout, $window) {
    var w = angular.element($window);
    $scope.parametrosSlider = {
        slidesPerView: 5,
        spaceBetween: 16,
        paginationClickable: true,
        effect: 'slide',
        pagination: false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: false,
        breakpoints: {
            767: {
                slidesPerView: 3,
                spaceBetween: 8,
                pagination: '.swiper-pagination',
            },
        }
    };
});
/* FIN SLIDER ENCUESTA SATISFACCION */