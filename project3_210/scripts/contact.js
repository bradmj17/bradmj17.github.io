
/*
I tried being fancy to push "email" as a value from the launch page if you inserted an email there, it would recognize that and place it in the email address box and already be disabled, indicating that it recognizes you just recently submitted an email to the newsletter
I will likely need to come back to this when we learn about cookies/cache stuff.. or just how to send values across using JS

------------------------------
var email = sessionStorage.getItem("email");
if (email==""){
  document.getElementById("email").disabled = true;
  document.getElementById("newsletter").disabled = true;
  document.getElementById("newsletter").innerHTML = "Thank you! We've sent a confirmation email.";
  //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_pushbutton_disabled2

}*/
$(document).ready(() => {
  let message;
  const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;


  /*---------------------------------------*/

  $("#join_list").click(() => {
    var checkValid = true;
    // validate the first email address
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email1 = $("#email1").val().trim();
    if (email1 === "") {
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
    if (email2 === "") {
      $("#email2").next().text("This field is required.");
      checkValid = false;
    } else if (email1 !== email2) {
      $("#email2").next().text("The email addresses must match.");
      checkValid = false;
    } else {
      $("#email2").next().text("");
    }
    $("#email2").val(email2);

    // validate the first name entry 
        const firstName = $("#firstname").val().trim(); 
        if (firstName === "") {
            $("#firstname").next().text("This field is required.");
            isValid = false;
        } else {
            $("#firstname").next().text("");
        }
        $("#firstname").val(firstName);

        // validate the last name entry
        const lastName = $("#lastname").val().trim();
        if (lastName === "") {
            $("#lastname").next().text("This field is required.");
            isValid = false;
        } else {
            $("#lastname").next().text("");
        }
        $("#lastname").val(lastName);

        //there is no validation for "tell us more"; field not required; no * indicator to indicate such


    if (checkValid === false) {
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
      
      submit();
     
    }
  });

  $("#clear_form").click(() => {
    $("#email1").value = "";
    $("#email2").value = "";
    $("#firstname").value = "";
    $("#lastname").value = "";
    $("#comment").value = "";

    document.getElementById("email1").disabled = false;
    document.getElementById("email2").disabled = false;
    document.getElementById("lastname").disabled = false;
    document.getElementById("firstname").disabled = false;
    document.getElementById("comment").disabled = false;

    $("#email1").next().text("*");
    $("#email2").next().text("*");
    $("#firstname").next().text("*");
    $("#lastname").next().text("*");


    $("#contactResult").slideUp(800);
    $("#email1").focus();
  });

  $("#email_1").focus();
});
