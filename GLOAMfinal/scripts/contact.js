
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

  /*NEWSLETTER FORM; QUICK AND EASY FORM*/
  $("#newsletter").click(() => {
    var isValid = true;
    console.log("pagman");
    // validate the first email address
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email1 = $("#email_1").val().trim();
    if (email1 == "") {
      $("#email_1").next().text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email1)) {
      $("#email_1").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email_1").next().text("");
    }
    $("#email_1").val(email1);

    // validate the second email address
    const email2 = $("#email_2").val().trim();
    if (email2 == "") {
      $("#email_2").next().text("This field is required.");
      isValid = false;
    } else if (email1 != email2) {
      $("#email_2").next().text("The email addresses must match.");
      isValid = false;
    } else {
      $("#email_2").next().text("");
    }
    $("#email_2").val(email2);

    // validate date of birth
    const dob = $("#dob").val().trim();
    if (dob == "") {
      $("#dob").next().text("This field is required.");
      isValid = false;
    } else if (!datePattern.test(dob)) {
      $("#dob").next().text("Please enter your birthday in MM/DD/YYYY format.");
      isValid = false;
    } else {
      $("#dob").next().text("");
    }
    $("#dob").val(dob);



    if (isValid == false) {
      event.preventDefault();
    }
    else{
      $("#email_1").prop('disabled', true);
      $("#email_2").prop('disabled', true);
      $("#dob").prop('disabled', true);
      $("#submit").prop('disabled', true);
      console.log("processing newsletter form . . .");
      $("#newsletterResult").slideDown(1000);
    }

  });
  /*NEWSLETTER CLEAR*/
  $("#clear_newsletter").click(() => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#dob").value = "";

    document.getElementById("email_1").disabled = false;
    document.getElementById("email_2").disabled = false;
    document.getElementById("dob").disabled = false;

    $("#email_1").next().text("*");
    $("#email_2").next().text("*");
    $("#dob").next().text("*");

    $("#newsletterResult").slideUp(800);
    $("#email_1").focus();
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
