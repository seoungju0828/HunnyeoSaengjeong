<?php
//데이터베이스 접속 파일

$host = 'localhost';
$id = 'test';
$pass = '1111';
$db = 'testdb';
$port = 3307;

$conn = mysqli_connect($host, $id, $pass, $db, $port);

?>