<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$hh= $data->id;
$sql = "SELECT * FROM meals_tbl WHERE id = '$data->id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
} else {
    
}

$sql1 = "select  * from meals_ingredients,ingredients_tbl where meals_ingredients.meals_id='$hh' AND ingredients_tbl.id=meals_ingredients.ingredients_id";
$result1 = $conn->query($sql1);
if ($result1->num_rows > 0) {
    // output data of each row
     $ingredients= array() ;
    while($row = $result1->fetch_assoc()) {
        $ingredients[] = $row;
    }
} else {
    echo "0 results";
}
$arr1= array('ing'=>$ingredients);

$res = array_merge($data, $arr1);
echo json_encode($sql );
$conn->close();
?>
