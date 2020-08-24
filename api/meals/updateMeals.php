<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


arr1=array('message'=>'success');
echo json_encode(arr1);
$conn->close();
?>