<?php

    // Obter a nossa conexão com o banco de dados
    include('../../conexao/cone.php');

    // Obter os dados enviados do formulário via $_REQUEST
    $requestData = $_REQUEST;

    // $indice = count(array_filter($requestData['objeto']));

    // echo $indice;
    
    // for($i=0; $i<$indice ;$i++){
    //     echo $requestData['objeto'][$i];
    // }

    if(empty($requestData['tarefa'])){
        // Caso a variável venha vazia eu gero um retorno de erro do mesmo
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s). '.$e
        );
    } else {
        // Caso não exista campo em vazio, vamos gerar a requisição
        $idChecklist = isset($requestData['idChecklist']) ? $requestData['idChecklist'] : "";
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

        // Verifica se é para cadastra um nvo registro
        if($operacao == 'insert'){
            // Prepara o comando INSERT para ser executado
            try{
                $sql = $pdo->query("SELECT * FROM checklist ORDER BY idChecklist DESC LIMIT 1");
                while($resultado=$sql->fetch(PDO::FETCH_ASSOC)){
                    $IDC = $resultado['idChecklist'];
                }

                $indice = count(array_filter($requestData['objeto']));
                for($i=0; $i<$indice ;$i++){
                    $stmt = $pdo -> prepare('INSERT INTO checklist (objeto, tarefa) VALUES (:objeto, :tarefa)');
                    $stmt -> execute(array(
                        ':objeto' => utf8_decode($requestData['objeto'][$i]),
                        ':tarefa' => utf8_decode($requestData['tarefa'])
                    ));
                }
                // Início da busca dos último cadastro efetivado
                $sql = $pdo->query("SELECT * FROM checklist ORDER BY idChecklist DESC LIMIT 1");
                
                while ($resultado = $sql->fetch(PDO::FETCH_ASSOC)) {
                    $idChecklist = $resultado['idChecklist'];
                }

                $indice = count(array_filter($requestData['idEvento']));

                for($i=0; $i < $indice; $i++) {
                    $stmt = $pdo->prepare('INSERT INTO evento_has_checklist (idChecklist, idEvento) VALUES (:a, :b)');
                    $stmt->execute(array(
                        ':a' => $idChecklist,
                        ':b' => $requestData['idEvento'][$i]
                    ));
                }
                
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Checklist cadastrado com sucesso.'
                );
            
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar o cadastro da checklist.'.$e
                );
            }
        } else {
            // Se minha variável operação estiver vazia então devo gerar os scripts de update
            try{
                $stmt = $pdo->prepare("UPDATE checklist SET objeto=:objeto, tarefa=:tarefa WHERE idChecklist=:id");
                $stmt->execute(array(
                    ':id' => $idChecklist,
                    ':objeto' => utf8_decode($requestData['objeto']),
                    ':tarefa' => $requestData['tarefa']
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Evento atualizado com sucesso!'
                );
            } catch(PDOException $e) {
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível efetuar a alteração da checklist.'.$e
                );
            }
        }
    }
        
    // Converter um array ded dados para a representação JSON
    echo json_encode($dados);