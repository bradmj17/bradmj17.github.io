<?php
//the code here is mostly for populating the table in DBView.php
    $dsn = 'mysql:host=localhost;dbname=gloam_contact';
    $username = 'employee001';
    $password = 'gl04mpa$$';

    try {
        $db = new PDO($dsn, $username, $password);
    } catch (PDOException $e) {
        $error_message = $e->getMessage();
        include('database_error.php');
        exit();
    }
    
?>