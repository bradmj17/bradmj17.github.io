<?php

function add_contact($last_name,$first_name,$email,$date,$comment) {
    global $db;
    $query = 'INSERT INTO products(First_Name, Last_Name, Email, Date, ISSUE)
              VALUES
                 (
                 :first_name, :last_name, :email, :date, $comment)';
    $statement = $db->prepare($query);
    $statement->bindValue(':first_name', $first_name);
    $statement->bindValue(':last_name', $last_name);
    $statement->bindValue(':email', $email);
    $statement->bindValue(':date', $date);
    $statement->bindValue(':comment', $comment);
     $statement->execute(); /*added*/
    $statement->closeCursor();
}