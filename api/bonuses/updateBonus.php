<?php
$data = json_decode(file_get_contents("php://input"));
$dateTime = date("y-m-d H:i:s", strtotime($data->date));
include "../db.php";
$sql = "UPDATE bonuses_tbl SET
name ='$data->employeeName',  date ='$dateTime',
amount ='$data->bonusAmount'
WHERE id = $data->id ";

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
