<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "UPDATE suppliers_tbl SET
name ='$data->name'
WHERE id = $data->id ";

if($data->name){
$qry = $conn->query($sql);
}
echo json_encode($sql);
$conn->close();
?>
