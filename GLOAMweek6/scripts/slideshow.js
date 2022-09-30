"use strict";
$(document).ready(() => {

  let nextSlide = $("#slides img:first-child");

  // start slide show
  setInterval(() => {
    $("#caption").fadeOut(1000);
    $("#slide").fadeOut(1000, () => {
      if (nextSlide.next().length == 0) {
        nextSlide = $("#slides img:first-child");
      } else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr("src");
      const nextCaption = nextSlide.attr("alt");
      $("#slide").attr("src", nextSlideSource).fadeIn(1000);
      $("#caption").text(nextCaption).fadeIn(1000);
      //hide and show is just slideUp and slideDown??
    }); // end fadeOut()
  }, 6000); // end setInterval()
  // i changed it to 6 seconds because it hurt my head moving so fast
});
$("#slide")