
$(document).ready(() => {
    $("#contactButton").click(() => {
                        $("#contact").addClass("nav-recolor");
                        $("#contactSection").delay(500).slideDown(800);
                       
                        
                       
                       
    });


    /*---------------------------------------*/
  
    $("#join_list").click(() => {
      var checkValid = true;
      // validate the first email address
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      const email1 = $("#email1").val().trim();
      if (email1 == "") {
        $("#email1").next().text("This field is required.");
        checkValid = false;
      } else if (!emailPattern.test(email1)) {
        $("#email1").next().text("Must be a valid email address.");
        checkValid = false;
      } else {
        $("#email1").next().text("");
      }
      $("#email1").val(email1);
  
      // validate the second email address
      const email2 = $("#email2").val().trim();
      if (email2 == "") {
        $("#email2").next().text("This field is required.");
        checkValid = false;
      } else if (email1 != email2) {
        $("#email2").next().text("The email addresses must match.");
        checkValid = false;
      } else {
        $("#email2").next().text("");
      }
      $("#email2").val(email2);
  
      // validate the first name entry 
          const firstName = $("#first_name").val().trim(); 
          if (firstName == "") {
              $("#first_name").next().text("This field is required.");
              isValid = false;
          } else {
              $("#first_name").next().text("");
          }
          $("#first_name").val(firstName);
  
          // validate the last name entry
          const lastName = $("#last_name").val().trim();
          if (lastName == "") {
              $("#last_name").next().text("This field is required.");
              isValid = false;
          } else {
              $("#last_name").next().text("");
          }
          $("#last_name").val(lastName);
  
          //there is no validation for "tell us more"; field not required; no * indicator to indicate such
  
  
      if (checkValid == false) {
        event.preventDefault();
      }
      else{
        $("#email1").prop('disabled', true);
        $("#email2").prop('disabled', true);
        $("#submit").prop('disabled', true);
        $("#first_name").prop('disabled', true);
        $("#last_name").prop('disabled', true);
        $("#comment").prop('disabled', true);
        console.log("processing contact form . . .");
       
        $("#contactResult").slideDown(1000);
        
      }
    });
  
    $("#clear_form").click(() => {
      $("#email1").value = "";
      $("#email2").value = "";
      $("#first_name").value = "";
      $("#last_name").value = "";
      $("#comment").value = "";
  
      document.getElementById("email1").disabled = false;
      document.getElementById("email2").disabled = false;
      document.getElementById("last_name").disabled = false;
      document.getElementById("first_name").disabled = false;
      document.getElementById("comment").disabled = false;
  
      $("#email1").next().text("*");
      $("#email2").next().text("*");
      $("#first_name").next().text("*");
      $("#last_name").next().text("*");
  
  
      $("#contactResult").slideUp(800);
      $("#email1").focus();
    });
  
    $("#email_1").focus();
  });
  