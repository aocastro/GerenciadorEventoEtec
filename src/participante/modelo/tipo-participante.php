<?php

    session_start();

    $dados = array('idT' => $requestData['idTipo']);

    echo json_encode($dados);