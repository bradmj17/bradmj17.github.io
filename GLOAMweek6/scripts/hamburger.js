$(document).ready( () => {

    $( "#hamburger" ).on( "click", function() {
        if ($("span#effect").attr("class") != "normal") {
                        $("span#effect").slideUp(600);
            $( "#effect" ).toggleClass( "normal", 1000 );
                       }
                       else {
                        $("span#effect").slideDown(800);
            $( "#effect" ).toggleClass( "normal", 1000 );

                       }
      });
     
       
});