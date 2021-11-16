<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/cone.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // Verificação de campo obrigatórios do formulário
    if(empty($requestData['nome'])){
// Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s).'
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $idEvento = isset($requestData['idEvento']) ? $requestData['idEvento'] : "";
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO evento (nome, dataE, horaInicio, horaFim, descricaoEvento, situacao, certificacao) VALUES (:nome, :dataE, :horaInicio, :horaFim, :descricaoEvento, :situacao, :certificacao)');
                $stmt->execute(array(
                    ':nome' => $requestData['nome'],
                    ':dataE' => $requestData['dataE'],
                    ':horaInicio' => $requestData['horaInicio'],
                    ':horaFim' => $requestData['horaFim'],
                    ':descricaoEvento' => $requestData['descricaoEvento'],
                    ':situacao' => $requestData['situacao'],
                    ':certificacao' => $requestData['certificacao']
                ));

                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Evento cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do evento.'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare("UPDATE evento SET nome=:nome, dataE=:dataE, horaInicio=:horaInicio, horaFim=:horaFim, descricaoEvento=:descricaoEvento, situacao=:situacao, certificacao=:certificacao WHERE idEvento=:id");
                $stmt->execute(array(
                    ':id' => $idEvento,
                    ':nome' => $requestData['nome'],
                    ':dataE' => $requestData['dataE'],
                    ':horaInicio' => $requestData['horaInicio'],
                    ':horaFim' => $requestData['horaFim'],
                    ':descricaoEvento' => $requestData['descricaoEvento'],
                    ':situacao' => $requestData['situacao'],
                    ':certificacao' => $requestData['certificacao']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Evento atualizado com sucesso!'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a alteração do evento.'.$e
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);