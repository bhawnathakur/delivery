<?php

    $data = json_decode(file_get_contents("php://input"));
	header('Access-Control-Allow-Origin: *');

	header('Access-Control-Allow-Headers: token, Content-Type');
	$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ems";
$conn = new mysqli($servername, $username, $password, $dbname);
?>