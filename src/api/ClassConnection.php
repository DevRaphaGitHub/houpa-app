<?php

abstract class ClassConnection {

    protected function connectDB()
    {
        try {

            $conn = new PDO("mysql:host=localhost;dbname=houpa_app","root","e3n1d7a9");
            return $conn;

        } catch (PDOException $error){

            return $error->getMessage();

        }
    }

}