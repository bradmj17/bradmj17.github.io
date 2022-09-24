$(document).ready(function(){
    $('.hero').height($(window).height());
});

//ww3 nav bar
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }