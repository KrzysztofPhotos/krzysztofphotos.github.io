<?php

$servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "baza_danych";

// Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
        $password = $_POST['password'];
        $sql = "INSERT INTO profil(email, password)
        VALUES ('$email', '$password')";

        if (mysqli_query($conn, $sql)){
            header("Location: http://192.168.6.114/");
        }

        mysqli_close($conn);

?>