function certifica() {
    for (const dado of dados) {
        var cert = $('.certi').attr("data-p")
        alert(cert)
    }
}

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
                            // $('#dataE').val(dado.dados.dataE)
                            // $('#dataE').attr('readonly', 'true')
                            // $('#horaInicio').val(dado.dados.horaInicio)
                            // $('#horaInicio').attr('readonly', 'true')
                            // $('#horaFim').val(dado.dados.horaFim)
                            // $('#horaFim').attr('readonly', 'true')
                        $('#descricaoEvento').val(dado.dados.descricaoEvento)
                        $('#descricaoEvento').attr('readonly', 'true')
                            // $('#situacao').val(dado.dados.situacao)
                            // $('#situacao').attr('readonly', 'true')
                            // certifica()
                            // $('.certi').val(dado.dados.certificacao)
                            // $('.certi').attr('readonly', 'true')

                        var situacao = dado.dados.situacao
                        if (dado.situacao == situacao) {
                            $('#situacao').append(`<option value="${dado.situcao}">${dado.situcao}</option>`)
                        }
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