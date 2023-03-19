<?php
require('database.php');
// editting html page, gets the ticket information based on the ticket# it grabs from the edit button. feeds it into textareas.



       $EditTicket = filter_input(INPUT_POST, 'TicketNum');
       $id = filter_input(INPUT_POST, 'id');

$queryTicketss = "SELECT * FROM ticket_information
                  WHERE  TicketNum = '$EditTicket' 
                  ORDER BY TicketNum";
$statement2 = $db->prepare($queryTicketss);
//$statement3->bindValue(':first_name', $first_name);
$statement2->execute();
$ticketss = $statement2->fetchAll();
$statement2->closeCursor();

$queryTicketsss = "SELECT *
                   FROM ticket_information
                   LEFT JOIN jobs_assigned ON ticket_information.TicketNum = jobs_assigned.TicketNum
                   WHERE ticket_information.TicketNum = '$EditTicket' 
                  ORDER BY ticket_information.TicketNum"
                  ;
$statement4 = $db->prepare($queryTicketsss);
//$statement3->bindValue(':first_name', $first_name);
$statement4->execute();
$ticketsss = $statement4->fetchAll();
$statement4->closeCursor();

?>
<!DOCTYPE html>
<html>
<head>
 <!-- meta tags -->
    <meta charset="utf-8">
    <title>Contact GLOAM</title>
    <meta name="description" content="Navigate this page - Join the GLOAMingo Newsletter or submit a Contact form.">
    <meta name="keywords" content="Home, GLOAM, Inflatables, Water, Beach, Clothes, Merchandise, GLOAMingo, Pool, Floaty, Towel, Customer Service, Ask, Newsletter, Discount">
    <meta name="author" content="Bradley Johnson">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!--icon at the top-->
    <link rel="shortcut icon" href="images/GLOAMingo.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="GLOAMingo.png">
    <link rel="apple-touch-icon" sizes="180x180" href="images/GLOAMingo.png">
    <link rel="icon" sizes="192x192" href="images/GLOAMingo.png">

    <!--My Style Sheet-->
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="contact.css">

</head>
<body class="gradient">
    <header>
      <nav><ul>
            
        <li>
          <a href="launchPage.html" id="GLOAMingoAnchor">
          <span class="colorO">G</span>
          <span class="colorL">L</span>
          <span class="colorA">O</span>
          <span class="colorL">A</span>
          <span class="colorO">M</span>
          <img class="pog" src="images/GLOAMingo.png" alt = "GLOAMingo">
        </a>
      </li>
      <li><a href="#" id="hamburger"><img src="images/hamburger.png" class="centerHamburger"></a></li>
      <span id="effect" class="normal">
        <li><a href="home.html">Home</a></li>
        <li><a href="catalog.html" >Catalog</a></li>
        <li><a href="FAQ.html">FAQ</a></li>
        <li><a href="contact.html" id="active">Contact</a></li>
        <li><a href="locations.html">Locations</a></li>
        <li></li>
      </span>
        </ul></nav>
    </header>
    
    <main>
              <video class="background-video" autoplay loop muted poster="images/placeholderImage.png">
        <source src="images/flamingoWaves.mp4" type="video/mp4">
    </video>
        <section class="section4">
            <p>YOU ARE CURRENTLY EDITING</p>
        </section>
      <section class="section2">

<form action="editing.php" method="post" style="margin-left:10px;">
            <?php foreach ($ticketsss as $tickets) : ?>
    <!--ALL THE TEXTAREAS-->
 <div style="margin-left:0;background-color:transparent;"><h1>Ticket #:  <?php echo $EditTicket ?> </h1></div>
               
             <br>
             <div style="margin-left:0;background-color:transparent;"><h2>First Name: </h2><textarea value="" id="fname" name="fname" rows="2" cols="40" style="margin:auto;"><?php echo $tickets['FirstName']; ?></textarea></div>
                <br>
                <div style="margin-left:0;background-color:transparent;"><h2>Last Name:  </h2>  <textarea value="" id="lname" name="lname" rows="2" cols="40" style="margin:auto;"><?php echo $tickets['LastName']; ?></textarea></div>
                <br>
                <div style="margin-left:0;background-color:transparent;"><h2>ISSUE:</h2> <textarea value="" id="issue" name="issue" rows="6" cols="300" style="margin:auto;"><?php echo $tickets['ISSUE']; ?></textarea></div>
                <br>
                <div style="margin-left:0;background-color:transparent;"><h2>Email Address: </h2><textarea value="" id="email" name="email" rows="2" cols="70" style="margin:auto;"><?php echo $tickets['Email']; ?></textarea></div>
                <br>
                <div style="margin-left:0;background-color:transparent;"><h2>Ticket Date: </h2><textarea value="" id="date" name="date" rows="2" cols="70" style="margin:auto;"><?php echo $tickets['TicketDate']; ?></textarea></div>
                <br>
                                
                <h2 style="color:red; font-size:12px; margin-left:20px;">please choose a number 1-5.</h2>
                <br>
                <div style="margin-left:0;background-color:transparent;"><h2>Employee Assigned: </h2><textarea value="" id="EmployeeID" name="EmployeeID" rows="2" cols="70" style="margin:auto;"><?php echo $tickets['EmployeeID']; ?></textarea></div>

            
                <br>
                            <input type="hidden" name="TicketNum"
                           value="<?php echo $tickets['TicketNum']; ?>">
                            <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
                            <!--EDIT BUTTON-->
                     <input type="submit" value="Submit Edit" style="margin-left:40%; width:130px; background-color:whitesmoke;">
              
          
            <?php endforeach; ?></form>
      <form action="deleteEntry.php" method="post" style="margin-left:10px;">
           <input type="hidden" name="TicketNum"
                           value="<?php echo $tickets['TicketNum']; ?>">
                    <input type="hidden" name="FirstName"
                           value="<?php echo $tickets['FirstName']; ?>">
                    <input type="hidden" name="LastName"
                           value="<?php echo $tickets['LastName']; ?>">
                    <input type="hidden" name="ISSUE"
                           value="<?php echo $tickets['ISSUE']; ?>">
                    <input type="hidden" name="Email"
                           value="<?php echo $tickets['Email']; ?>">
                    <input type="hidden" name="TicketDate"
                           value="<?php echo $tickets['TicketDate']; ?>">
                    <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
                    <!--DELETE BUTTON; HIDDEN INPUTS ABOVE WITH THE SAME INFO; SEPARATE FORM SO I MADE THEM HIDDEN, CANT USE SAME FORM-->
          <input type="submit" value="Delete" style="margin-left:40%; width:130px; background-color:whitesmoke; color:red;">
      </form>
    </section>
    </main>
          <div class="section2">
         <p><a href="index.php">Go Back</a></p>
    </div>
     <footer>
<div class="section3">
  <p>Phone: <a href="tel:+12085130443">  (415) 513-0443</a></p> 
  <p>Email: <a href="mailto:bradleyjohnson@my.cwi.edu">customerservice@GLOAMingo.com</a></p>
  <p>1690 16th Ave<br>San Francisco, CA 94122</p>
  <p>&copy;	2013-2022 GLOAM All Rights Reserved</p>
</div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="scripts/contact.js"></script>
    <script src="scripts/hamburger.js"></script>
</body>
</html>