cursosApp.controller('tablaSubtitulo', function ($scope) {
    /* inicio tabla subtitulo sticky */
    var stickyElement = $(".tablaSubtitulo"),
        stickyClass = "tablaSubtitulo--sticky",
        stickyPos = stickyElement.offset().top, //Distance from the top of the window.
        stickyHeight;

    //Sticker function:
    function stickerFn() {
        var winTop = $(this).scrollTop();
        //Check element position:
        winTop >= stickyPos ?
            stickyElement.addClass(stickyClass) :
            stickyElement.removeClass(stickyClass) //Boolean class switcher.
    };
    stickerFn(); //Run.

    //Function trigger:
    $(window).scroll(function () {
        stickerFn();
    });
    /* fin sticky header */
});