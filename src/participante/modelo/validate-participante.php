<?php

    session_start();

    if(!isset($_SESSION['idParticipante']) && !isset($_SESSION['nome'])){
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Você não está autenticado para utilizar o sistema, por favor realize o login.'
        );
    }else{
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Seja bem vindo, '.$_SESSION['nome'].' ao sistema de gerenciamento.'
        );
    }

    echo json_encode($dados);