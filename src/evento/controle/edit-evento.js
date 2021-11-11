$(document).ready(function() {

    $('#table-evento').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()


        $('.modal-title').append('Edição do evento')

        let idEvento = `idEvento=${$(this).attr('id')}`
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idEvento,
            url: 'src/evento/modelo/view-evento.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/evento/visao/form-evento.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#descricaoEvento').val(dado.dados.descricaoEvento)
                            // $('#dataE').val(dado.dados.dataE)
                            // $('#horaInicio').val(dado.dados.horaInicio)
                            // $('#horaFim').val(dado.dados.horaFim)
                            // $('#situacao').val(dado.dados.situacao)
                            // $('#situacao').attr('readonly', 'true')
                            // var nomeSetor = dado.dados.situacao
                            // for (const dado of dados) {
                            //     if (dado.situacao == nomeSetor) {
                            //         $('#situacao').append(`<option value="${dado.situacao}">${dado.situacao}</option>`)
                            //     }
                            // }
                            // // aparecer os demais setores existentes
                            // for (const setor of dados) {
                            //     if (setor.situacao != nomeSetor) {
                            //         $('#situacao').append(`<option value="${setor.situacao}">${setor.situacao}</option>`)
                            //     }
                            // }
                    })
                    $('.btn-save').show()
                    $('#modal-evento').modal('show')
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