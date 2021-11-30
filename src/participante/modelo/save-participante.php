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
        $idParticipante = isset($requestData['idParticipante']) ? $requestData['idParticipante'] : "";
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO participante (nome, cpf, telefone, email, senha, idTipo) VALUES (:nome,:cpf,:telefone,:email,:senha, :idT)');
                $stmt->execute(array(
                    ':nome' => utf8_decode($requestData['nome']),
                    ':cpf' => $requestData['cpf'],
                    ':telefone' =>$requestData['telefone'],
                    ':email' => $requestData['email'],
                    ':senha' => md5($requestData['senha']),
                    ':idT' => $requestData['idTipo']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Participante cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do participante.'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare("UPDATE participante SET nome=:nome, cpf=:cpf, telefone=:telefone, email=:email, senha=:senha, idTipo=:idT WHERE idParticipante=:id");
                $stmt->execute(array(
                    ':id' => $idParticipante,
                    ':nome' => utf8_decode($requestData['nome']),
                    ':cpf' => $requestData['cpf'],
                    ':telefone' => $requestData['telefone'],
                    ':email' => $requestData['email'],
                    ':senha' => md5($requestData['senha']),
                    ':idT' => $requestData['idTipo']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Participante atualizado com sucesso!'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a alteração do participante.'.$e
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);