<?php

include 'Database.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])){
        $query = "SELECT * FROM products WHERE id = ".$_GET['id'];
        $result = mGet($query);
        echo json_encode($result->fetch(PDO::FETCH_ASSOC));
    } else {
        $query = "SELECT * FROM products";
        $resultado = mGet($query);
        echo json_encode($resultado->fetchAll());
    }
    // header("HTTP/1.1 200 OK"); Já fornecido pelo Laragon
    exit();
}

header("HTTP/1.1 400 Bad Request");


?>