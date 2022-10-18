"use strict";
//brad

$(document).ready( () => {
    const date =  new Date();
    var datePlusTwentyOne = new Date(date);
    //add 21 days to date
    datePlusTwentyOne.setDate(datePlusTwentyOne.getDate() + 21);
        //console.log("date before toDateString() >> " + datePlusTwentyOne);
    var expDate = datePlusTwentyOne.toDateString()

    $("#add_task").click( () => {   
        const textbox = $("#task");
        const task = textbox.val();
        if (task === "") {
            alert("Please enter a task.");
            textbox.focus();
        } else {
            // add task to web storage 
            let tasks = localStorage.E14tasks || "";  // "" is default
            localStorage.E14tasks = tasks.concat(task, "\n");

            //date??
            const date =  new Date();
            var datePlusTwentyOne = new Date(date);
            //add 21 days to date
            datePlusTwentyOne.setDate(datePlusTwentyOne.getDate() + 21);
                //console.log("date before toDateString() >> " + datePlusTwentyOne);
            var expDate = datePlusTwentyOne.toDateString()
                console.log("date AFTER toDateString() >> " + expDate);
            //same code as the "add task to web storage" section, modified. new Key "Expiration"
            let dates = localStorage.Expiration || "";  // "" is default
            localStorage.Expiration = dates.concat(expDate, "\n");

            // clear task text box and re-display tasks
            textbox.val("");
            $("#task_list").val(localStorage.E14tasks);
            textbox.focus();
        }
    });
    
    $("#clear_tasks").click( () => {
        localStorage.removeItem("E14tasks");
        localStorage.removeItem("Expiration");
        $("#task_list").val("");
        $("#task").focus();
    }); 
    
    // display tasks on initial load
    //$("#task_list").val(localStorage.E14tasks);

    // so like basically... if you go and change the expiration value to like.. 2.. 
    // the whole thing, like delete multiple values as well..
    // then it works. it'll delete task list box and all the stuff in between.
    // 
        if (localStorage.getItem("Expiration") < Date()){
            localStorage.removeItem("E14tasks");
            localStorage.removeItem("Expiration");
        }
        else{
            $("#task_list").val(localStorage.E14tasks);
        }
      
   // $("#task_list").val(localStorage.E14tasks);
    $("#task").focus();
});