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

$sql = "SELECT title, user_name,mail,content FROM mySiteQ";
$result = $conn->query($sql);
$return_array = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $return_array[$row["title"]]=$row["user_name"].$row["mail"].$row["content"];
    }
    echo json_encode($return_array);
} else {
    echo "0 results";
}

$conn->close();
?>