<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "DELETE FROM meals_tbl WHERE id = $data->id ";
$sql1 = "DELETE FROM meals_ingredients WHERE meals_id = $data->id ";

$result = $conn->query($sql);
$result1 = $conn->query($sql1);
$conn->close();
?>