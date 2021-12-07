$(document).ready(function() {

    $('#table-participante').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()


        $('.modal-title').append('Visualização do participante')

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
                        $('#nome').attr('readonly', 'true')
                        $('#cpf').val(dado.dados.cpf)
                        $('#cpf').attr('readonly', 'true')
                        $('#telefone').val(dado.dados.telefone)
                        $('#telefone').attr('readonly', 'true')
                        $('#email').val(dado.dados.email)
                        $('#email').attr('readonly', 'true')
                        $('#email').val(dado.dados.email)
                        $('#email').attr('readonly', 'true')
                        $('.ss').hide()

                        var tipo = dado.dados.idTipo
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            assync: false,
                            url: 'src/tipo-usuario/model/all-tipo.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.idTipo == tipo) {
                                        $('#idTipo').append(`<option value="${dado.idTipo}">${dado.nomeTipo}</option>`)
                                    }
                                }
                            }
                        })
                        $('#idTipo').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-participante').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Library', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})