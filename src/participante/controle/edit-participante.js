$(document).ready(function() {

    $('#table-participante').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()


        $('.modal-title').append('Edição do participante')

        let idParticipante = `idParticipante=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idParticipante,
            url: 'src/participante/modelo/view-participante.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/participante/visao/form-participante.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#cpf').val(dado.dados.cpf)
                        $('#telefone').val(dado.dados.telefone)
                        $('#email').val(dado.dados.email)
                        $('#senha').val(dado.dados.senha)
                        $('#idParticipante').val(dado.dados.idParticipante)
                        $('#email').val(dado.dados.email)
                        $('#senha').val(dado.dados.senha)
                        var tipo = dado.dados.idTipo
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo-usuario/model/all-tipo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.idTipo == tipo) {
                                        $('#idTipo').append(`<option selected value="${dado.idTipo}">${dado.nomeTipo}</option>`)
                                    } else {
                                        $('#idTipo').append(`<option value="${dado.idTipo}">${dado.nomeTipo}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').show()
                    $('#modal-participante').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Elevent', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})