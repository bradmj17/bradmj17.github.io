"use strict";

$(document).ready(() => {

    $("#drop").html("");
//change this date to modify when the halloween merchandise drops
var countDownDate = new Date("Oct 16, 2022 12:00:00").getTime();

var countdownTimer = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let message = ""; 
  if (days > 1 ) {
       message += "There are " + days + " days left until the GLOAMingo Halloween Drop";
  }
  else {
       message = ("GLOAMINGO Halloween Drop will be released when the countdown is finished " +hours +":"+ minutes + ":" + seconds);
  }
  if (days < 0){
    clearInterval(countdownTimer)
      message = "HALLOWEEN DROP IS AVAILABLE NOW!"
      $(".hideUntilReady").toggleClass("unhide","hideUntilReady");
      $(".countdownCard").toggleClass("unhide");
      $("#ComeBackSoon").html(" ");
  }
  
      $("#drop").html(message);
      $("#countdown2").html(message);
  
}, 1000);

/*
--------------SUNSET CODE----------------------
    setInterval(countdown, 1000);

function countdown() {
    const now = new Date();
    const endTime = new Date(now);
                            endTime.setMonth(9);
                            endTime.setDate(13);
                            endTime.setHours(0);
                            endTime.setMinutes(0);
                            endTime.setSeconds(0);
                            endTime.setFullYear( endTime.getFullYear());
console.log(endTime);
    const timeLeft = endTime.getTime() - now.getTime();
    const msInOneDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.ceil( timeLeft / msInOneDay );
    console.log(daysLeft);
    const hoursNow = now.getHours();
    const minutesNow = now.getMinutes();
    const secondsNow = now.getSeconds();
    console.log(hoursNow +":"+ minutesNow + ":" + secondsNow);

      // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    const hoursThen = endTime.getHours();
    const minutesThen = endTime.getMinutes();
    const secondsThen = endTime.getMinutes();
    console.log("HOURSTHEN"+hoursThen);
//math countdown
const superHour = ((daysLeft *24)+hoursThen)
const countdownHours = (superHour-hoursNow);
console.log(countdownHours);
const countdownMinutes = (minutesThen-minutesNow)
const countdownSeconds = (secondsNow-secondsThen)

//let message =  (hoursNow +":"+ minutesNow + ":" + secondsNow);

let message = ""; 
if (daysLeft > 1 ) {
     message += "There are " + daysLeft + " days left until the GLOAMingo Halloween Drop";
}
else {
     message = (countdownHours +":"+ countdownMinutes + ":" + countdownSeconds);
}
if (daysLeft < 0){
    message = "HALLOWEEN DROP IS AVAILABLE NOW!"
}

    $("#drop").html(message);
}

/*
    let message = "There ";
    if (daysLeft < 1 ) {
        message += "is less than 24 hours"
    }
    else {
        message += "are " + daysLeft + " days";
    }
    message += " left until the GLOAMingo Fall Merchandise Drop";

    $("#drop").html(message);
*/
});