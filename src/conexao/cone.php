<?php

    $hostname= "fdb30.awardspace.net";
    $dbname= "3762242_elevent";
    $username= "3762242_elevent";
    $password= "elevent123456";

    try{
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$dbname, $username, $password);
        $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo 'conectado';
    } catch(PDOException $e){
        echo 'Erro:'.$e-> getMessage();
    }