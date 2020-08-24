<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";

$sql = "UPDATE users SET name = '$data->name',username='$data->username', password='$data->password'

WHERE userid = $data->id ";
$qry = $conn->query($sql);
if($data->name){
	echo json_encode(array("message"=>"success"));
}
else
{
	echo json_encode(array("message"=>"failure"));
}

$conn->close();
?>
