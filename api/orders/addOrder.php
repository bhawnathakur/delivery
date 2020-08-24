<?php
$jsonData=file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


   $sql = "INSERT INTO orders (number,priority,ordername,fileName,address,postcode,phone,info,driverId)
VALUES ('$data->num','$data->priority','$data->ordername','$data->fileName', '$data->address','$data->postcode', '$data->phone','$data->info','$data->driver')";

if($data->num){
	$qry = $conn->query($sql);
echo json_encode(array("message"=>"success"));

}
else
{
	echo json_encode(array("message"=>"failure"));

}
$conn->close();

?>
