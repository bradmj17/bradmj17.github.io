<?php
require('database.php');
//unique query that sorts by employeeid assigned.
global $id;
    $id = filter_input(INPUT_POST, 'id');

$queryTickets = "SELECT * FROM employees_table
                WHERE EmployeeID='$id'
                  ";
$statement3 = $db->prepare($queryTickets);
//$statement3->bindValue(':first_name', $first_name);
$statement3->execute();
$tickets = $statement3->fetchAll();
$statement3->closeCursor();

//unique query that sorts by employeeid assigned.

$queryTicketsss = "SELECT *
                   FROM ticket_information
                   LEFT JOIN jobs_assigned ON ticket_information.TicketNum = jobs_assigned.TicketNum
                   
                  ORDER BY jobs_assigned.EmployeeID, jobs_assigned.TicketNum"
                  
                  
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
        <!-- greeting employee -->
        
         <?php foreach ($tickets as $ticket) : ?>
                <h2>Logged in as:
                    <?php echo $ticket['FirstName']; ?>
                    <?php echo $ticket['LastName']; ?>
                </h2>
            <?php endforeach; ?>
        <h2>EMPLOYEE ID: #<?php  echo $id ?></h2>
        <h2>This is the Employee's view database. Please press the "EDIT" button next to your desired entry to edit.</h2>
        <h2>You are currently sorting by assigned employees.</h2><br><br><br><br><br>
        <!--3 sorting options-->
        <div class="section4" style="margin-left:4%;margin-right:2%">
                             <form action="EmployeeDB.php" method="post" style="width:80%;" class="center">
                    <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
          <input type="submit" value="Sort by ticket#" style=" background-color:whitesmoke;" class="center">
      </form>
            <form action="SortedEmployee.php" method="post" style="width:80%;" class="center" >
                    <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
          <input type="submit" value="Sort by employee" style=" background-color:whitesmoke;" class="center colorG" disabled>
      </form>
    <form action="EmployeeJobs.php" method="post" style="width:80%;" class="center">
                    <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
          <input type="submit" value="Sort by your jobs" style=" background-color:whitesmoke;" class="center ">
      </form>
        
        </div>
       <br>
    </section>
      <section class="section4">
        <!-- large table -->
        
        <table>
            <tr>
        
                <th>Ticket #</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>ISSUE</th>
                <th>Email</th>
                <th>DATE</th>
                <th>Assigned Employee</th>
                <th>Edit</th>
            </tr>

            <?php foreach ($ticketsss as $tickets) : ?>
            <tr>
                <td><?php echo $tickets['TicketNum']; ?></td>
                <td><?php echo $tickets['FirstName']; ?></td>
                <td><?php echo $tickets['LastName']; ?></td>
                <td><?php echo $tickets['ISSUE']; ?></td>
                <td><?php echo $tickets['Email']; ?></td>
                 <td><?php echo $tickets['TicketDate']; ?></td>
                 <td>
                   
                    <?php echo $tickets['EmployeeID']; ?>
              
                 <td>
                     <form action="edit.php" method="post">
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
                    <input type="hidden" name="EmployeeID"
                           value="<?php echo $tickets['EmployeeID']; ?>">
                    <input type="hidden" name="id"
                           value="<?php echo $id; ?>">
                    <input type="submit" value="EDIT" style="margin-left:10px; width:130px; background-color:whitesmoke;">
                     </form>
                 </td>
            </tr>
            <?php endforeach; ?>
        </table>
       
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