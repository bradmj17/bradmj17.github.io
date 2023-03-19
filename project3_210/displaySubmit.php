<?php
    /*hi if you're reading this. the insert statement took me decades to figure out, everything else was correct.
       i've replaced the code hundreds of times trying to find the correct way to do it. the true is, everything was correct.
       the only change i really needed though was putting the sql insert statement in "", and the $ variables surrounded in ''.
       after attempting that and having it work, i am not removing any potentialy filler code that exists. just leaving it.
      syntax of server code and insert statement is here: https://www.geeksforgeeks.org/how-to-insert-form-data-into-database-using-php/

     *      */
    // 
require('database.php');
    $email1 = filter_input(INPUT_POST, 'email1', FILTER_VALIDATE_EMAIL);
    $firstname = filter_input(INPUT_POST, 'firstname');
    $lastname = filter_input(INPUT_POST, 'lastname');
    $date = filter_input(INPUT_POST, 'date');
    
    //comment textarea validation from ch07 lab1
    $comment = filter_input(INPUT_POST, 'comment');
    $comment = htmlspecialchars($comment);
    $comment = nl2br($comment, FALSE);    

//just like database.php, except it concats all of the stuff together to connect
$servername = "localhost";
$username = "employee001";
$password = "gl04mpa$$";
$dbname = "gloam_contact";
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// insert into statement. more about it up top; i had problems here... but the example code didn't have problems?
$sql = "
INSERT INTO ticket_information
                 (LastName, FirstName, Email, TicketDate, ISSUE)
              VALUES
                 ('$lastname','$firstname','$email1','$date', '$comment');";
// connects and has an error at the top of screen if fails 
if ($conn->query($sql) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
  // output data of each row



$conn->close();
include("createJob.php");
?>
<!DOCTYPE html>
<html>
<head>
 <!-- meta tags -->
    <meta charset="utf-8">
    <title>Submitted</title>
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
      <div>
    <h1>Ticket Submitted</h1>
  </div>
        <main class="section4">
            <!--general echo statements showing what was just added to the DB-->
                    <p>Email: <?php echo htmlspecialchars($email1); ?></p><br>
                    <p>First name: <?php echo htmlspecialchars($firstname); ?></p><br>
                    <p>Last name: <?php echo htmlspecialchars($lastname); ?></p><br>
                    <p>Comments: <?php echo $comment; ?></p><br>
                    <p>Ticket Created: <?php echo htmlspecialchars($date); ?></p><br>

                    <p>&nbsp;</p>
            
    </main>
        <!--more nav links-->
            <div class="section3">
         <p><a href="DBView.php">View DB</a></p>
         <p><a href="index.php">Back</a></p>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="scripts/contact.js"></script>
    <script src="scripts/hamburger.js"></script>
</body>
</html>