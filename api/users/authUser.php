<?php
$data = json_decode(file_get_contents("php://input"));
include "../db.php";
$token=null ;

$sql = "SELECT * FROM users WHERE username = '$data->username' AND password = '$data->password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
	
	 if($data[0]["isadmin"]=="yes")
	 {
		 echo json_encode(array("message"=>"success" ,
	 "token"=>"sdajgksajdhksdhpo7pooylkhsadlkjhlsadlhljkdsahkljhdsaajhklksdajhkjhsdkjhuyp9i",
	 "isadmin"=> $data[0]["isadmin"] 
	 ));
	 }
	 else
	 {
		 echo json_encode(array("message"=>"success" ,
	 "token"=>"ijhaldjfpsadu-0[wtgpouigsifpdogip[sofig][fspo8tg-er0ip[peroi[[oggk[sgi[spig[fpigf[pisgo",
	 "isadmin"=> $data[0]["isadmin"],
	 "userid"=> $data[0]["userid"] 
	 ));
	 }
     
} else {
   echo json_encode($arr2);
}




$conn->close();
?>