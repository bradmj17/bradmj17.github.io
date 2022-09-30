"use strict";


$(document).ready(() => {

  $("#inflatableCatalog").toggleClass("invis");

$("#Inflatables").click( () => {
		const inflat = $("#inflatableCatalog");

		$(inflat).toggleClass("invis");
    

		if ($(inflat).attr("class") != "invis") {
			//$(inflat).fadeOut(600);
	   	}
	   	else {
			$(inflat).delay(500).fadeIn(800);
      $("#swimCatalog").fadeOut(600);
      $("#merchCatalog").fadeOut(600);
		   }
		   
    });

      $("#Swimwear").click( () => {
        const swim = $("#swimCatalog");
    
        $(swim).toggleClass("invis");
        
    
        if ($(swim).attr("class") != "invis") {
          //$(swim).fadeOut(600);
           }
           else {
          $(swim).delay(500).fadeIn(800);
          $("#inflatableCatalog").fadeOut(600);
          $("#merchCatalog").fadeOut(600);
           }
           
   
        });

        $("#merch").click( () => {
          const merch = $("#merchCatalog");
      
          $(merch).toggleClass("invis");
          
      
          if ($(merch).attr("class") != "invis") {
            //$(merch).fadeOut(600);
             }
             else {
            $(merch).delay(500).fadeIn(800);
            $("#inflatableCatalog").fadeOut(600);
            $("#swimCatalog").fadeOut(600);
             }
             
      
          });

    });
    