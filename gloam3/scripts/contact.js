const $ = (selector) => document.querySelector(selector);
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
document.addEventListener("DOMContentLoaded", () => {
  //first form; newsletter, only one input just to put an email. the idea here is that it'll send some sort of confirmation. This'll be for a later date, probably, 
  //where we can send unique emails made by JavaScript.
  $("#newsletter").addEventListener("click", () => {
    const email = $("#email");
    let errorMessage = "";

    if (email.value == "") {
      errorMessage += "First email is required.\n";
    }

    if (errorMessage == "") {
      //this is new. I wanted to disable the boxes so it looks more like you've confirmed your emails and are complete with the form. There is no clear on this form for a reason; I don't think it really makes sense, although I have added functionality in the Contact Us form that allows you to reset the entire form.
      document.getElementById("email").disabled = true;
      document.getElementById("newsletter").disabled = true;
      document.getElementById("newsletterResult").innerHTML = "Thank you! A confirmation email has been sent!"; //it doesn't (yet?)
      
    } else {
      alert(errorMessage);
    }

  });
  $("#join_list").addEventListener("click", () => {
    // get values user entered in textboxes
    const email1 = $("#email_1");
    const email2 = $("#email_2");
    const firstName = $("#first_name");

    // create an error message and set it to an empty string
    let errorMessage = "";

    // check user entries - add text to error message if invalid
    if (email1.value == "") {
      errorMessage += "First email is required.\n";
    }

    if (email2.value == "") {
      errorMessage += "Second email is required.\n";
    }

    if (email1.value != email2.value) {
      errorMessage += "Both emails must match.\n";
    }

    if (firstName.value == "") {
      errorMessage += "First name is required.\n";
    }
    if (comment.value == "") {
      errorMessage += "Please tell us about your experience.\n";
    }

    //if any of these errors are picked up they adjust the errorMessage, if the errorMessage picks up any errors then it will NOT prompt the thank you
    if (errorMessage == "") {
      document.getElementById("email_1").disabled = true;
      document.getElementById("email_2").disabled = true;
      document.getElementById("first_name").disabled = true;
      document.getElementById("comment").disabled = true;
      document.getElementById("contactResult").innerHTML = "Thank you, " + firstName.value + ". We've recieved your submission.";
    } else {
      alert(errorMessage);
    }
  });

  $("#clear_form").addEventListener("click", () => {
    $("#email_1").value = "";
    $("#email_2").value = "";
    $("#first_name").value = "";
    $("#comment").value = "";
    document.getElementById("email_1").disabled = false;
    document.getElementById("email_2").disabled = false;
    document.getElementById("first_name").disabled = false;
    document.getElementById("comment").disabled = false;
    document.getElementById("contactResult").innerHTML = "";

    $("#email_1").focus();
  });

  $("#email").focus();
});
