<?php 
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'food2go';

    $connection = mysqli_connect($host, $user, $password, $database);

    if(mysqli_connect_error()){
        echo 'Unable To Connect!';
    }
?>