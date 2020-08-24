<?php
$data = json_decode(file_get_contents("php://input"));
$dateTime = date("y-m-d H:i:s", strtotime($data->date));
include "../db.php";
$sql = "INSERT INTO bonuses_tbl (name, date, amount)
VALUES ('$data->employeeName', '$dateTime', '$data->bonusAmount')";
if($data->employeeName){
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