<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "DELETE FROM bonuses_tbl WHERE id = $data->id ";
$result = $conn->query($sql);
$conn->close();
?>