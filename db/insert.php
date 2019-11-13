<?php
$servername = "localhost";
$username = "yesutis1";
$password = "choijy0303!";
$dbname = "yesutis1";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO mySiteQ (title, user_name, mail,content) 
VALUES ('".$_GET["title"]."','".$_GET["user_name"]."','".$_GET["mail"]."','".$_GET["content"]."')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>