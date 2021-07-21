<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/cone.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['nomeTipo'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $ID = isset($requestData['idTipo']) ? $requestData['idTipo'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO tipo (nomeTipo) VALUES (:nomeTipo)');
                $stmt->execute(array(
                    ':nomeTipo' => utf8_decode($requestData['nomeTipo'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo usuario cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do tipo usuario.'
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare('UPDATE tipo SET nomeTipo = :nomeTipo WHERE idTipo = :id');
                $stmt->execute(array(
                    ':id' => $ID,
                    ':nomeTipo' => utf8_decode($requestData['nomeTipo'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Tipo usuario atualizado com sucesso.'
                );
            } catch (PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o alteração do tipo usuario.'
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);