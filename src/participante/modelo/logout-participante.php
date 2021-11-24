<?php

    session_start();

    session_destroy();

    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Sua sessão foi encerrada.'
    );

    echo json_encode($dados);