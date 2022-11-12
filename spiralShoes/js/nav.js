
window.onscroll = function() {myFunction()};
const navbar =  document.getElementById("NAV");
function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    navbar.classList.add("fixed-top","position-fixed","nav-recolor");
  } else {
    navbar.classList.remove("fixed-top","position-fixed","nav-recolor");
  }
}
$("#navBUTTON").click( () => {
    navbar.classList.toggle("btn-recolor");

});
/* w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2 */
/*
navbar.addEventListener("mouseenter",(event) => {
    if (navbar.hasAttribute("fixed-top")) {
        navbar.classList.add("nav-recolor");
      } else {
        navbar.classList.remove("nav-recolor");
      }

});

navbar.childNodes.addEventListener("mouseover", () => {

    if (document.documentElement.scrollTop > 102) {
        navbar.classList.remove("nav-recolor1");
        navbar.classList.add("nav-recolor");
      } else {
        navbar.classList.remove("nav-recolor1");
      }
  });*/