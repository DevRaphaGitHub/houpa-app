<?php
$pdo = null;
$host = "localhost";
$user = "root";
$password = "e3n1d7a9";
$bd = "houpa_app";

function connect(){
    try{
        $GLOBALS['pdo'] = new PDO("mysql:host=".$GLOBALS['host'].";dbname=".$GLOBALS['bd']."", $GLOBALS['user'], $GLOBALS['password']);
        $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch (PDOException $e){
        print "Error: Não foi possível se conectar ao banco de dados!";
        print "\nError!: ".$e."<br/>";
        die();
    }
}

function disconnect() {
    $GLOBALS['pdo'] = null;
}

function get($query){
    try{
        connect();
        $result = $GLOBALS['pdo']->prepare($query);
        $result->setFetchMode(PDO::FETCH_ASSOC);
        $result->execute();
        disconnect();
        return $result;
    }catch(Exception $e){
        die("Error: ".$e);
    }
}

?>