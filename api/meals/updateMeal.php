<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$ingredients=json_encode($data->ingredients);
$sql = "UPDATE meals_tbl SET
name ='$data->name',  price ='$data->price',netoweight ='$data->totweight',
calories ='$data->totcals',proteins ='$data->totproteins',carbos ='$data->totcarbos',fats ='$data->totfats',notes ='$data->notes',ingredients='$ingredients',cost ='$data->totcost'

WHERE id = $data->id ";
$qry = $conn->query($sql);
echo json_encode($sql);
$sql1 = "DELETE FROM meals_ingredients WHERE meals_id = $data->id ";
$qry1 = $conn->query($sql1);

$mayarr=$data->ingredients;



$arrlength = count($mayarr);

for($x = 0; $x < $arrlength; $x++) {
    
$ingredients_id  =($mayarr[$x]->id);

$ingredients_weight = ($mayarr[$x]->weight);
	$sql = "INSERT INTO meals_ingredients (meals_id,ingredients_id,wt)
VALUES ('$data->id', '$ingredients_id', '$ingredients_weight')";

if($ingredients_id)
{
$qry = $conn->query($sql);
}
}
$arr1=array('message'=>'success');
//echo json_encode($arr1);
$conn->close();
?>