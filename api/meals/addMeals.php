<?php

$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$ingredients=json_encode($data->ingredients);
if(!$data->notes){
$data->notes="";
}

   $sql = "INSERT INTO meals_tbl (name, price, netoweight,calories,proteins,carbos,fats,notes,ingredients,cost)
VALUES ('$data->name', '$data->price','$data->totweight',  '$data->totcals','$data->totcals','$data->totcarbos','$data->totfats','$data->notes','$ingredients','$data->totcost')";
if($data->name){
	$qry = $conn->query($sql);
	$meals_id=  mysqli_insert_id($conn);
$message=array('message'=>	$meals_id);
echo json_encode($sql);

}

$mayarr=$data->ingredients;



$arrlength = count($mayarr);

for($x = 0; $x < $arrlength; $x++) {
    
$ingredients_id  =($mayarr[$x]->id);

$ingredients_weight = ($mayarr[$x]->weight);
	$sql = "INSERT INTO meals_ingredients (meals_id,ingredients_id,wt)
VALUES ('$meals_id', '$ingredients_id', '$ingredients_weight')";

if($ingredients_id)
{
$qry = $conn->query($sql);
}
}



$conn->close();

?>
