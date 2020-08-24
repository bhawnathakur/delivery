<?php
$jsonData=file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


   $sql = "INSERT INTO users (name,username,password)
VALUES ('$data->name','$data->username', '$data->password')";
echo json_encode($qry);

$conn->close();

?>
