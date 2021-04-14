<?php

include('../../conexao/Exemplo.php');

    $id= $_REQUEST['id'];
    $senha = $_REQUEST['senha'];
    $senha = md5($senha);

    // Criar uma query de consulta ao banco de dados
    $sql = "SELECT * FROM participante WHERE idParticipante = ".$id." AND senha = '".$senha."' ";

    // Agora iremos executar nossa query SQL
    //$resultado = ($query, $link);

    if($resultado && mysqli_num_rows($resultado)>0){

        while($dados=mysqli_fetch_array($resultado)){
            session_start();//Iniciando uma nova sessão vazia
            $_SESSION['id'] = $dados['id'];
            $_SESSION['nome'] = $dados['nome'];
            $_SESSION['curso'] = $dados['curso'];
            $_SESSION['tipo'] = $dados['tipo'];
            
        }

        
        $dados= array('result'=>true);
    }else{
        $dados = array('result'=>false);
    }

    echo json_encode($dados);