<?php
    $data = json_decode(file_get_contents("php://input"));
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: token, Content-Type');
	

$username = $data->username;
$password = $data->password;

if($username=='admin' && $password =='admin')
{
?>
{
"success":true,
"secret" : "My ultimate xdc sectret"
}
<?php }
else
{
	?>
    
 {
"success":false,
"message" : "Invalid Credentials"
}



<?php
}
//echo json_encode($arr);
?>
