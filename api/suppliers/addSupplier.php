<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "INSERT INTO suppliers_tbl (name)
VALUES ('$data->name')";
if($data->name){
	$qry = $conn->query($sql);
?>
 {
"success":true,
"message":"hhhh"
}

<?php
}
$conn->close();
?>