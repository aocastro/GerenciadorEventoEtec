<?php

    include('../../conexao/cone.php');

    $sql = $pdo->query("SELECT *, count(idParticipante) as achou FROM participante WHERE email = '".$_REQUEST['email']."' AND senha = '".md5($_REQUEST['senha'])."' ");

    while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)) {
        if($resultado['achou'] == 1){
            session_start();
            $_SESSION['idParticipante'] = $resultado['idParticipante'];
            $_SESSION['nome'] = $resultado['nome'];
            $_SESSION['idTipo'] = $resultado['idTipo'];
            $dados = array(
                'tipo' => 'success',
                'mensagem' => 'Login correto!'
            );
        }else{
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Nome de usuário ou senha errado.'.$e
            );
        }
    }

    echo json_encode($dados);