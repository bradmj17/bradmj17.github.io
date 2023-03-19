<?php
$random = rand(1, 5);
//alright, i've left only A FRACTION of the carnage i left trying to get this query to work. probably the most complex one in the project.
// I think it could be described as an insert statement with a subquery and with a left join nested inside? Not sure, all i know is it took be an hour-ish for this one query.
// basially, the goal of this query is to retrieve the most recent ticketnum from ticket_information to create the job using that ticketnum, since there's no auto_incrementing avaialble for that in the DB itself.
// this get the highest (MAX, most recent) auto incremented ticket num from ticket information and feeds it into the creation of the job, alongside a randomized employee.
// before, I wanted to have two queries. first, selecting the most recent ticket num, then secondly inserting that and the random employeeid. That didn't work for the longest time. Then i tried a subquery!

/*
require('database.php');

$random = rand(1, 5);


$queryTicketsss = 'SELECT MAX(TicketNum)
                   FROM ticket_information
                   LEFT JOIN jobs_assigned ON ticket_information.TicketNum = jobs_assigned.TicketNum
                  ORDER BY ticket_information.TicketNum'
                  ;
$statement4 = $db->prepare($queryTicketsss);
//$statement3->bindValue(':first_name', $first_name);
$statement4->execute();
$ticketsss = $statement4->fetchAll();
$statement4->closeCursor();


$queryTickets = "INSERT INTO jobs_assigned
                 (EmployeeID, TicketNum)
              VALUES
              ('$random','$ticketsss');"
                  ;
$statement1 = $db->prepare($queryTickets);
//$statement3->bindValue(':first_name', $first_name);
$statement1->execute();
$tickets = $statement4->fetchAll();
$statement1->closeCursor();



*/


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
$sql = 
"INSERT INTO jobs_assigned (EmployeeID, TicketNum)
    
SELECT '$random', MAX(ticket_information.TicketNum) AS TicketNum
                   FROM ticket_information
                   LEFT JOIN jobs_assigned ON ticket_information.TicketNum = jobs_assigned.TicketNum
                  ORDER BY ticket_information.TicketNum";
// connects and has an error at the top of screen if fails 
$result = $conn->query($sql);


/*
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// insert into statement. more about it up top; i had problems here... but the example code didn't have problems?
$sql2 =  "INSERT INTO jobs_assigned
                 (EmployeeID, TicketNum)
              VALUES
              ('$random','$row[TicketNum]');"
                  ;
// connects and has an error at the top of screen if fails 
if ($conn->query($sql2) === TRUE) {
  echo "";
} else {
  echo "Error: " . $sql2 . "<br>" . $conn->error;
}
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
*/
?>







