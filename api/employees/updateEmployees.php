<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "UPDATE employees_tbl SET
name ='$data->name',  position ='$data->position',
salary ='$data->salary'
WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->name){
}
$conn->close();
?>