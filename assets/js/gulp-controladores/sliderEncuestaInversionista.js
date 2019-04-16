/* INICIO SLIDER ENCUESTA INVERSIONISTA */
cursosApp.controller('sliderEncuestaInversionista', function ($scope, $timeout, $window) {
    var w = angular.element($window);
    $scope.parametrosSlider = {
        slidesPerView: 3,
        initialSlide: 2,
        centeredSlides: true,
        spaceBetween: 0,
        paginationClickable: true,
        effect: 'slide',
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: false,
        breakpoints: {
            767: {
                slidesPerView: 1,
                spaceBetween: 8,
                pagination: '.swiper-pagination',
            },
        }
    };
});
/* FIN SLIDER ENCUESTA INVERSIONISTA */