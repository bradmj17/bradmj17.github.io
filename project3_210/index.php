<?php
date_default_timezone_set('America/Los_Angeles');
$date = date('Y-m-d H:i:s');
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
            <!--nav links don't go anywhere; just for show at the moment, only brought over contact page-->
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
    <h1>Contact Us</h1>
  </div>
<div>

        <form id="contact_form" class="colorA" name="contact_form" action="displaySubmit.php" method="post" >
      <div>
          <label for="email1">Email Address:</label>
          <input type="text" name="email1" id="email1" class="textbox" value="">
          <span>*</span>
      </div>
      
      <div>
          <label for="email1">Confirm Email Address:</label>
          <input type="text" id="email2" name="email2" value="">
          <span>*</span>
      </div>
      
      <div>
          <label for="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" value="">
          <span>*</span>
      </div>

      <div>
        <label for="lastname">Last Name:</label>
        <input type="text" id="lastname" name="lastname" value="">
        <span>*</span>
    </div>
            <!--tried a hidden input here where it grabs the date when you start filling the ticket-->
      <input type="hidden" id="date" name="date" value="<?php echo date('Y-m-d H:i:s') ?>">
      
      <div>
        <label for="comment">Tell us more:</label>
        <textarea cols="20" rows="5" id="comment" name="comment" value=""></textarea>
        <span></span>
    </div>
      
      <div>
          <label>&nbsp;</label>
          <input type="submit" id="join_list" value="Submit" 
     
                 
                 >
          <input type="reset" id="clear_form" value="Clear">
      </div>     

  </form>   
</div>  
  <div id="contactResult" class="invis">
        <h2 class="colorL" >We've received your form!</h2>
    </div>
    
    </main>
    <!--nav-->
    <div class="section2">
         <p><a href="DBView.php">View DB</a></p>
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
 <!--   <script src="scripts/contact.js"></script> -->
    <script src="scripts/hamburger.js"></script>
</body>
</html>