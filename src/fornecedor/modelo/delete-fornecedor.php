<?php

    // Instância do banco de dados
    include("../../conexao/cone.php");

    // Coleta do ID que será excluído do nosso banco de dados que está sendo enviado pelo FORM
    $idFornecedor = $_REQUEST['idFornecedor'];

    // Criar a nossa querie para interação com o banco de dados
    $sql = "DELETE FROM fornecedor WHERE idFornecedor = $idFornecedor";

    // Executar a nossa querie
    $resultado = $pdo->query($sql);

    // Testaremos o retorno do resultado da nossa querie
    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Registro excluído com sucesso!'
        );
    } else {
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o registro'
        );
    }

    echo json_encode($dados);