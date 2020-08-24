<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


$sql = "UPDATE orders SET number = '$data->num',ordername = '$data->ordername',fileName = '$data->fileName',address = '$data->address',phone = '$data->phone',postcode = '$data->postcode',priority = '$data->priority',
info = '$data->info',drivercomments = '$data->drivercomments',
driverId= '$data->driverId',delivered = '$data->delivered',datetime = '$data->datetime'
WHERE id = $data->id ";

$qry = $conn->query($sql);
if($data->num){
	echo json_encode(array("message"=>"success"));
}
else
{
	echo json_encode(array("message"=>"failure"));
}


$conn->close();
?>
