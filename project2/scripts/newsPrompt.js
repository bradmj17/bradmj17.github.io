"use strict";
            
// prompts visitor to submit email
    let message;
    let email = (prompt("Sign Up For the GLOAMingo Newsletter for 15% off!"+"\n\nSubmit your email here:"));
//if they click "cancel" or just put nothing
    if(email==null||email=="") 
    {
    message = "Sign up for the Newsletter!";
    }
    else{
        message = "Thank you! " +" "+ "A confirmation email has been sent to:" + "<br>" + email;
        sessionStorage.setItem("email",email)
    }
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt
//it finds a certain ID (#) and puts the string in there, not just randomly on the page
    document.getElementById("email").innerHTML = message;







//------LATER, FUTURE UPDATE TO newsletter???

//check if it has @ and . [@gmail.com] it cant be .com because there's other domains so it's hard to validate
//let validate = email.inlcudes("@","!")