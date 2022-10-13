"use strict";


$(document).ready(() => {
  $("#swimCatalog").fadeOut(1);
  $("#merchCatalog").fadeOut(1);
  $("#halloweenCatalog").fadeOut(1);
  console.log("opening inflatables catalog");

  $("#Inflatables").click( () => {
		const inflat = $("#inflatableCatalog");

		$(inflat).toggleClass("invis");
    console.log("opening inflatables catalog");
			$(inflat).delay(500).fadeIn(800);
      $("#swimCatalog").fadeOut(600);
      $("#merchCatalog").fadeOut(600);
      $("#halloweenCatalog").fadeOut(600);
      });
		   
   

      $("#Swimwear").click( () => {
        const swim = $("#swimCatalog");
    
         $(swim).toggleClass("invis");
    
      
          console.log("opening swim catalog");
          $(swim).delay(500).fadeIn(800);
          $("#inflatableCatalog").fadeOut(600);
          $("#merchCatalog").fadeOut(600);
          $("#halloweenCatalog").fadeOut(600);
           
   
        });

        $("#merch").click( () => {
          const merch = $("#merchCatalog");
          $(merch).toggleClass("invis");
          console.log("opening merchandise catalog");
            $(merch).delay(500).fadeIn(800);
            $("#inflatableCatalog").fadeOut(600);
            $("#swimCatalog").fadeOut(600);
            $("#halloweenCatalog").fadeOut(600);
          });

          $("#Halloween").click( () => {
            const hallo = $("#halloweenCatalog");
            $(hallo).toggleClass("invis");
            console.log("opening halloween catalog");
              $(hallo).delay(500).fadeIn(800);
              $("#inflatableCatalog").fadeOut(600);
              $("#swimCatalog").fadeOut(600);
              $("#merchCatalog").fadeOut(600);
            });

    });
    

    
    /*-------legacy dblclick code with if-------*/
/*
        $("#merch").click( () => {
          const merch = $("#merchCatalog");
      
          $(merch).toggleClass("invis");
          
      
          if ($(merch).attr("class") == "invis") {
            $(merch).delay(500).fadeIn(800);
            $("#inflatableCatalog").fadeOut(600);
            $("#swimCatalog").fadeOut(600);
             }
             
      
          });
          */
