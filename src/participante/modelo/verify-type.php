<?php

    session_start();

    $dados = array('tipo' => $_SESSION['idTipo']);

    echo json_encode($dados);