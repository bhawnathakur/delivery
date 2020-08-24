<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$sql ="SELECT * FROM orders INNER JOIN users ON orders.driverId=users.userid WHERE (driverId= $data->id AND orders.delivered='yes')  " ;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} 
else
{
	echo json_encode(array("result"=>"noresult"));
}
$conn->close();?>
