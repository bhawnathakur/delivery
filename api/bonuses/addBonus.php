<?php
$data = json_decode(file_get_contents("php://input"));
$dateTime = date("y-m-d H:i:s", strtotime($data->date));
include "../db.php";
$sql = "INSERT INTO bonuses_tbl (name, date, amount)
VALUES ('$data->employeeName', '$dateTime', '$data->bonusAmount')";
if($data->employeeName){
	$qry = $conn->query($sql);

$sql1 = "UPDATE employees_tbl SET
bonusdate ='$dateTime',  amount ='$data->bonusAmount'
WHERE name = '$data->employeeName' ";
$qry1 = $conn->query($sql1);


?>
 {
"success":true,
"message":"hhhh"
}

<?php
}
$conn->close();
?>