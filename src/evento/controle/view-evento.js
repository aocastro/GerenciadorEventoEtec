$(document).ready(function() {

    $('#table-evento').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados
        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização do evento')

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
                        $('#nome').attr('readonly', 'true')
                        $('#dataE').val(dado.dados.dataE)
                        $('#dataE').attr('readonly', 'true')
                        $('#horaInicio').val(dado.dados.horaInicio)
                        $('#horaInicio').attr('readonly', 'true')
                        $('#horaFim').val(dado.dados.horaFim)
                        $('#horaFim').attr('readonly', 'true')
                        $('#descricaoEvento').val(dado.dados.descricaoEvento)
                        $('#descricaoEvento').attr('readonly', 'true')

                        $('#situacao').empty()
                        var sit
                        if (dado.dados.situacao == "p") {
                            sit = "Preparando..."
                        } else if (dado.dados.situacao == "o") {
                            sit = "Ocorrendo..."
                        } else {
                            sit = "Terminou..."
                        }
                        $('#situacao').append(`<option value="">${sit}</option>`)
                        $('#situacao').attr('readonly', 'true')

                        $('#certificacao').empty()
                        var cert
                        if (dado.dados.certificacao == "1") {
                            cert = "Sim"
                        } else if (dado.dados.certificacao == "2") {
                            cert = "Não"
                        }
                        $('#certificacao').append(`<option value="">${cert}</option>`)
                        $('#certificacao').attr('readonly', 'true')


                    })
                    $('.btn-save').hide()
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