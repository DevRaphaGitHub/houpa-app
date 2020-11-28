<?php

include("ClassConnection.php");

class ClassProducts extends ClassConnection {

    // Rota GET com todos os produtos
    public function showProducts()
    {
        $PFetch = $this->connectDB()->prepare("SELECT * FROM products");
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