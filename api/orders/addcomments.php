<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


$sql = "UPDATE orders SET drivercomments = '$data->drivercomments'
WHERE id = $data->id ";
	
$qry = $conn->query($sql);
if($data->id){
	echo json_encode(array("message"=>"success"));
}
else
{
	echo json_encode(array("message"=>"failure"));
}


$conn->close();
?>
