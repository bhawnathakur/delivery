<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";



$sql = "UPDATE orders SET delivered = 'yes', datetime= '$data->datetime'
WHERE id = $data->id ";
$qry = $conn->query($sql);
echo json_encode($sql);
if($data->id)
{
}
else
{
}
 json_encode(array("message"=>"success"));

$conn->close();
?>
