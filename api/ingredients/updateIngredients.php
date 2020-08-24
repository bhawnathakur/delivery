<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "UPDATE ingredients_tbl SET
name ='$data->name',  weight ='$data->weight',
cost ='$data->cost',cals ='$data->cals'
WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->name){
}
$conn->close();
?>