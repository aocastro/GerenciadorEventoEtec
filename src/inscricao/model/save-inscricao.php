<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/cone.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;


    // Verificação de campo obrigatórios do formulário
    
        // Caso não exista campo em vazio, vamos gerar a requisição
        // $idParticipante = isset($requestData['idParticipante']) ? $requestData['idParticipante'] : "";
        $hoje = date('d/m/Y');
        $hora = date('H:i');
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO inscricao (idEvento, idParticipante, dataInscricao, horaInscricao) VALUES (:idEvento, :idParticipante, :dataInscricao, :horaInscricao)');
                $stmt->execute(array(
                    ':idEvento' => utf8_decode($requestData['idEvento']),
                    ':idParticipante' => $requestData['idParticipante'],
                    ':dataInscricao' => $hoje,
                    ':horaInscricao' => $hora
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Inscrição realizada com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a inscrição.'.$e
                );
            }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);