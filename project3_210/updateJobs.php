<?php
// Get the product data
    $ticketnum = filter_input(INPUT_POST, 'TicketNum');
    $email = filter_input(INPUT_POST, 'email');
    $firstname = filter_input(INPUT_POST, 'fname');
    $lastname = filter_input(INPUT_POST, 'lname');
    $date = filter_input(INPUT_POST, 'date');
    $employeeid = filter_input(INPUT_POST, 'EmployeeID');
    $id = filter_input(INPUT_POST, 'id');

    $comment = filter_input(INPUT_POST, 'issue');
    $comment = htmlspecialchars($comment);
    $comment = nl2br($comment, FALSE);    

// Validate inputs
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
$sql2 = "
UPDATE jobs_assigned
    SET EmployeeID = '$employeeid'
    WHERE TicketNum = '$ticketnum';
        ";
// connects and has an error at the top of screen if fails 
if ($conn->query($sql2) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql2 . "<br>" . $conn->error;
}
$conn->close();


    // sends you back
    include('EmployeeDB.php');

?>