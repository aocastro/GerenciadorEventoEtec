<?php

    $hostname= "sql303.epizy.com";
    $dbname= "epiz_28910013_elevent";
    $username= "epiz_28910013";
    $password= "Etectcc2021";

    try{
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'conectado';
    } catch(PDOException $e){
        echo 'Erro:'.$e-> getMessage();
    }