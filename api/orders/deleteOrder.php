<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "DELETE FROM orders WHERE id = $data->id ";


$result = $conn->query($sql);

json_encode($data->id);
$conn->close();
?>