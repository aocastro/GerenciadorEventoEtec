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
                        $('#idEvento').val(dado.dados.idEvento)
                        $('#nome').val(dado.dados.nome)
                        $('#dataE').val(dado.dados.dataE)
                        $('#horaInicio').val(dado.dados.horaInicio)
                        $('#horaFim').val(dado.dados.horaFim)
                        $('#descricaoEvento').val(dado.dados.descricaoEvento)
                        $('#situacao').val(dado.dados.situacao)
                        $('#certificao').val(dado.dados.certificao)
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