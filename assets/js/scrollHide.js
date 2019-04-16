var mediaquery = window.matchMedia("(min-width: 768px)");
if (mediaquery.matches) {
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".menu--up").css({
          "opacity": "1"
        })
      } else {
        $(".menu--up").css({
          "opacity": "0"
        })
      }
    })
  })
} else {
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".menu--up").css({
          "opacity": "1"
        })
      }
    })
  })

}
