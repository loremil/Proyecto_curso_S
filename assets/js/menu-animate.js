function init() {

    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 0,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "thin");
        } else {
            if (classie.has(header, "thin")) {
                classie.remove(header, "thin");
            }
        }
    });
    // SCROLL HEADER ALTURA OUT

    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 500,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "out");
        } else {
            if (classie.has(header, "out")) {
                classie.remove(header, "out");
            }
        }
    });

}
window.onload = init();
