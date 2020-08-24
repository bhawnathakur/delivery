<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


$sql = "UPDATE orders SET priority = '$data->priority'
WHERE id = $data->id ";

$qry = $conn->query($sql);
if($data->priority){
	echo json_encode(array("message"=>"success"));
}
else
{
	echo json_encode(array("message"=>"failure"));
}


$conn->close();
?>
