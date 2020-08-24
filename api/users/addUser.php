<?php
$jsonData=file_get_contents("php://input");
$data = json_decode(file_get_contents("php://input"));
include "../db.php";


   $sql = "INSERT INTO users (name,username,password)
VALUES ('$data->name','$data->username', '$data->password')";
if($data->name){
	$qry = $conn->query($sql);
echo json_encode(array("message"=>"success"));

}
else
{
echo json_encode(array("message"=>"failure"));
}

$conn->close();

?>
