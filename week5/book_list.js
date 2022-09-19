"use strict";
// the event handler for the click event of each h2 element
//brad
const toggle = (evt) => {
    let h2Element = evt.currentTarget; // gets the clicked h2
    let divElement = h2Element.nextElementSibling; //gets div underneath the clicked h2
//toggle from this week's rollover i did
      h2Element.classList.toggle("minus");
      divElement.classList.toggle("open");
        };

        //NEW TOGGLE; uses currentTarget and applies it to aElement. finds image ( i had troubles, but this is the line of code that worked getting the image) then gives its source the aElement's href. preventDefault makes it not open up into a separate page with the image
        const toggleA = (evt) => {
            let aElement = evt.currentTarget;
            //picture
            document.getElementById("image").src = aElement.href;
            //alt text = the text within the a
            document.getElementById("image").alt = aElement.innerHTML;

            evt.preventDefault();
                };


  $(document).ready(() => { 
    //preload
    $("#categories a").each( (index, a) => {
        const newURL = a.href;       // gets the id attribute

        // preload rollover image		
        const rolloverImage = new Image();
        rolloverImage.src = newURL;
        //------------------------------
        
    // get the h2 tags
    const h2Elements = categories.querySelectorAll("#categories h2"); //goes to #categories (overall umbrella id)
    // finds which h2 specifically was clicked along the array, toggle evt
    for (let h2Element of h2Elements) {
      h2Element.addEventListener("click", toggle);
    }

    const aElements = categories.querySelectorAll("#categories a");
    for (let aElement of aElements) {
      aElement.addEventListener("click", toggleA);
    }

   // $("#web_images a").click(toggleA());
 

    // set focus on first h2 tag's <a> tag
    h2Elements[0].focus();
  });




// i think this works?? not sure how to definitively tell if i successfully preload; this is straight from rollover
for (let link of links) {
  image = new Image();
  image.src = link.href;
  image.alt = link.innerHTML;
  imageCache[imageCache.length] = image;
}




});
  