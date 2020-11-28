<?php

include("ClassConnection.php");

class ClassProducts extends ClassConnection {

    // Gerar JSON de uma requisição do banco
    public function showProducts()
    {
        $PFetch = $this->conectaDB()->prepare("select * from products");
        $PFetch->execute();

        $J = []; // JSON
        $I = 0; // Index

        while($Fetch=$PFetch->fetch(PDO::FETCH_ASSOC)){

            $J[$I]=[

                "id"=>$Fetch['id'],
                "description"=>$Fetch['description'],
                "name"=>$Fetch['name'],
                "photo"=>$Fetch['photo'],
                "price"=>$Fetch['price']

            ];

            $I++;
        }

        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }
}