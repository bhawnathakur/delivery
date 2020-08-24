<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "UPDATE ingredients_tbl SET
name ='$data->name',  weight ='$data->weight',
netoweight ='$data->netoweight',
supplier ='$data->supplier',

cost ='$data->cost',cals ='$data->cals',
carbos='$data->carbos',
proteins='$data->proteins',
fats='$data->fats',
imgName='$data->imgName'
WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->name){
}
echo json_encode($sql);
$conn->close();
?>
