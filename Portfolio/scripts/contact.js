$(document).ready(() => {
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
  
    /*contact FORM; QUICK AND EASY FORM*/
    $("#submit").click(() => {
      var isValid = true;
      // validate the first email address
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
      const email = $("#email").val().trim();
      if (email == "") {
        $("#email").next().text("This field is required.");
        isValid = false;
      } else if (!emailPattern.test(email)) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
      } else {
        $("#email").next().text("");
      }
      $("#email").val(email);
      // validate the first name entry 
      const name = $("#name").val().trim(); 
      if (name == "") {
          $("#name").next().text("This field is required.");
          isValid = false;
      } else {
          $("#name").next().text("");
      }
      $("#name").val(name);
      // validate comment
      const comment = $("#comment").val().trim(); 
      if (comment == "") {
          $("#messageSpan").text("Please leave a message!");
          isValid = false;
      } else {
          $("#messageSpan").text("");
      }
      $("#comment").val(comment);      
  
  
  
      if (isValid == false) {
        event.preventDefault();
      }
      else{
        console.log("processing contact form . . .");

        $( "#contact-form" ).submit();

  
      }
  
    });
});