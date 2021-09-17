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
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s). '.$e
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $idFornecedor = isset($requestData['idFornecedor']) ? $requestData['idFornecedor'] : "";
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $stmt = $pdo->prepare('INSERT INTO fornecedor (nome, email, telefone, cep, rua, bairro, cidade, uf, numero, tipo_fornecedor_idTipoFornecedor) VALUES (:nome,:email,:telefone,:cep, :rua, :bairro, :cidade, :uf, :numero, :tipo_fornecedor_idTipoFornecedor)');
                $stmt->execute(array(
                    ':nome' => $requestData['nome'],
                    ':email' => $requestData['email'],
                    ':telefone' =>$requestData['telefone'],
                    ':cep' => $requestData['cep'],
                    ':rua' => $requestData['rua'],
                    ':bairro' => $requestData['bairro'],
                    ':cidade' => $requestData['cidade'],
                    ':uf' => $requestData['uf'],
                    ':numero' => $requestData['numero'],
                    ':tipo_fornecedor_idTipoFornecedor' => $requestData['tipo_fornecedor_idTipoFornecedor']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Fornecedor cadastrado com sucesso.'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro do fornecedor.'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare("UPDATE fornecedor SET nome=:nome, email=:email, telefone=:telefone, cep=:cep, rua=:rua, bairro=:bairro, cidade=:cidade, uf=:uf, numero=:numero, tipo_fornecedor_idTipoFornecedor=:tipo_fornecedor_idTipoFornecedor WHERE idFornecedor=:id");
                $stmt->execute(array(
                    ':id' => $idFornecedor,
                    ':nome' => $requestData['nome'],
                    ':email' => $requestData['email'],
                    ':telefone' =>$requestData['telefone'],
                    ':cep' => $requestData['cep'],
                    ':rua' => $requestData['rua'],
                    ':bairro' => $requestData['bairro'],
                    ':cidade' => $requestData['cidade'],
                    ':uf' => $requestData['uf'],
                    ':numero' => $requestData['numero'],
                    ':tipo_fornecedor_idTipoFornecedor' => $requestData['tipo_fornecedor_idTipoFornecedor']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Fornecedor atualizado com sucesso!'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a alteração do fornecedor.'.$e
                );
            }
        }
    }

    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);