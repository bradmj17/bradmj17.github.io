"use strict";

$(document).ready(() => {

    $("#drop").html("");
//change this date to modify when the halloween merchandise drops
var countDownDate = new Date("Dec 7, 2022 12:00:00").getTime();

var countdownTimer = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let message = ""; 
  if (days > 1 ) {
    message = ("ENDING: " +days+":"+hours +":"+ minutes + ":" + seconds);
  }
  else {
       message = ("ENDING: " +hours +":"+ minutes + ":" + seconds);
  }
  if (days < 0){
    clearInterval(countdownTimer)
      message = "Black Friday is out now"
      $(".hideUntilReady").toggleClass("unhide","hideUntilReady");
      $(".countdownCard").toggleClass("unhide");
      $("#ComeBackSoon").html(" ");
  }
  
      $("#bfCountdown").html(message);
  
}, 1000);
});