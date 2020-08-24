<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "DELETE FROM users WHERE userid = $data->id ";


$result = $conn->query($sql);

json_encode($data->id);
$conn->close();
?>