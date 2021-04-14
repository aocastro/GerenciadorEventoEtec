<?php

    echo '<hr>';
    echo 'Trabalhando com PDO';
    echo '<hr>';

    /* TRABALHANDO ACESSO AO BANCO COM PDO */
    $link = new PDO("mysql:host=fdb30.awardspace.net;dbname=3762242_elevent", "3762242_elevent", "elevent123456");
    $link->exec("SET CHARACTER SET utf8");

    $query = $link->prepare("SELECT * FROM endereco");
    
    $query->execute();

    $res = $query->fetchAll(PDO::FETCH_ASSOC);

    foreach( $res as $lista)
        {
            echo '<br>';
            echo $lista['rua'];
        }