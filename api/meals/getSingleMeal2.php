<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
//$hh= $data->id;
$sql = "SELECT * FROM meals_tbl WHERE id =55";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
     $data1 = array() ;
	  $data2 = array() ;
    while($row = $result->fetch_assoc()) {
        
		$sql1 ="select * from meals_ingredients , ingredients_tbl WHERE (meals_ingredients.meals_id = 55 AND meals_ingredients.ingredients_id= ingredients_tbl.id)" ;
		$result1 = $conn->query($sql1);
		while($row1 = $result1->fetch_assoc()) {
		$data1[] = $row1;	
		}
		
		$row['mIngredients']= $data1 ;
		$data[] = $row;
	}
} else {
    
}


echo json_encode( $data );
$conn->close();
?>
