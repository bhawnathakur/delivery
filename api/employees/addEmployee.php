<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql = "INSERT INTO employees_tbl (name, position, salary)
VALUES ('$data->name', '$data->position', '$data->salary')";
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