<?php
// deletes ticket based on ticket... yeah the names of the files do not make sense; i had to flip flop the queries in them in order to get past the errors. :(
    $ticketnum = filter_input(INPUT_POST, 'TicketNum');
    $email = filter_input(INPUT_POST, 'email');
    $firstname = filter_input(INPUT_POST, 'fname');
    $lastname = filter_input(INPUT_POST, 'lname');
    $date = filter_input(INPUT_POST, 'date');
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
$sql = "

        DELETE
FROM ticket_information 
WHERE TicketNum = '$ticketnum';
        ";
// connects and has an error at the top of screen if fails 
if ($conn->query($sql) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

    // Display the Product List page
    include('EmployeeDB.php');

?>