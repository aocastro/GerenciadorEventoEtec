<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/cone.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['nomeTipoFornecedor'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $ID = isset($requestData['idTipoFornecedor']) ? $requestData['idTipoFornecedor'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO tipo_fornecedor (nomeTipoFornecedor) VALUES (:nomeTipoFornecedor)');
                $stmt->execute(array(
                    ':nomeTipoFornecedor' => utf8_decode($requestData['nomeTipoFornecedor'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo de fornecedor, cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do tipo de fornecedor.'
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare('UPDATE tipo_fornecedor SET nomeTipoFornecedor = :nomeTipoFornecedor WHERE idTipoFornecedor = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':nomeTipoFornecedor' => utf8_decode($requestData['nomeTipoFornecedor'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo de fornecedor atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do tipo de fornecedor.'
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);