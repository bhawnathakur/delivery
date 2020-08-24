<?php

include "../db.php";
$result = mysqli_query($conn,"SELECT * FROM meals_tbl WHERE id=(SELECT MAX(ID) FROM meals_tbl)");
$row1 = mysqli_fetch_array($result);
$id = $row1['id'];;
echo json_encode($id);
$conn->close();
?>
