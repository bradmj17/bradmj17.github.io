<?php
require('database.php');
//character select screen, sends id of selection to employeedb
    $email1 = filter_input(INPUT_POST, 'email1', FILTER_VALIDATE_EMAIL);
    $firstname = filter_input(INPUT_POST, 'firstname');
    $lastname = filter_input(INPUT_POST, 'lastname');
    $date = filter_input(INPUT_POST, 'date');
    

    $comment = filter_input(INPUT_POST, 'comment');
    $comment = htmlspecialchars($comment);
    $comment = nl2br($comment, FALSE);    
    


    // Get Ticket for selected category
$queryTickets = 'SELECT * FROM employees_table
                  ORDER BY LastName';
$statement3 = $db->prepare($queryTickets);
//$statement3->bindValue(':first_name', $first_name);
$statement3->execute();
$tickets = $statement3->fetchAll();
$statement3->closeCursor();
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
        <!-- display a table of products -->
        <h2>Welcome to the employee select screen.</h2>
        <h2>Please select your name and proceed to the employee database view</h2><br><br><br><br><br>
       <form action="EmployeeDB.php" method="post"
              id="selectEmployee">

            <label>Employee Select:</label>
            <select name="id">
            <?php foreach ($tickets as $ticket) : ?>
                <option value="<?php echo $ticket['EmployeeID']; ?>">
                    <?php echo $ticket['LastName']; ?>
                </option>
            <?php endforeach; ?>
            </select>

           
            <input type="submit" value="Go"><br>
        </form>
       <br><br><br><br><br>
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