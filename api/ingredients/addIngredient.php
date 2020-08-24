<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "INSERT INTO ingredients_tbl (name, weight,netoweight,supplier, cost,cals,proteins,carbos,fats,imgName)
VALUES ('$data->name', '$data->weight','$data->netoweight', 
'$data->supplier', '$data->cost', '$data->cals','$data->proteins','$data->carbos','$data->fats','$data->imgName')";
if($data->name){
	$qry = $conn->query($sql);
	$mess=array('message'=>'success');
echo json_encode($mess);
?>

<?php
}
else {
	$mess=array('message'=>	$qry );
echo json_encode($mess);// code...
}
$conn->close();
?>
