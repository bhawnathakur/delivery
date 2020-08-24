<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$hh= $data->id;
$sql = "SELECT * FROM orders_tbl WHERE id = '$data->id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    echo "0 results";
}

$sql1 = "select  * from orders_meals,meals_tbl WHERE orders_meals.order_id='$hh' AND meals_tbl.id=orders_meals.meals_id";
$result1 = $conn->query($sql1);
if ($result1->num_rows > 0) {
    // output data of each row
     $meals= array() ;
    while($row = $result1->fetch_assoc()) {
        $meals[] = $row;
    }
} else {
    echo "0 results";
}
$arr1= array('meals'=>$meals);

$res = array_merge($data); 
echo json_encode($res);
$conn->close();
?>