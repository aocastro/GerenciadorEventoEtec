$(document).ready(function() {

    $('#table-checklist').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados
        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização da checklist')

        let idChecklist = `idChecklist=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idChecklist,
            url: 'src/checklist/modelo/view-checklist.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/checklist/visao/checklist.html', function() {
                        $('.evento').hide()
                        $('.btn-add').hide()
                        $('#objeto').val(dado.dados.objeto)
                        $('#objeto').attr('readonly', 'true')
                        $('#tarefa').val(dado.dados.tarefa)
                        $('#tarefa').attr('readonly', 'true')
                            // var nomeEvento = dado.dados.idEvento
                            // $.ajax({
                            //     type: 'POST',
                            //     dataType: 'json',
                            //     url: 'src/evento/modelo/all-evento.php',
                            //     success: function(dados) {
                            //         for (const dado of dados) {
                            //             if (dado.idEvento == nomeEvento) {
                            //                 $('#idEvento').append(`<option value="${dado.idEvento}">${dado.nome}</option>`)
                            //             }
                            //         }
                            //     }
                            // })
                    })
                    $('.btn-save').hide()
                    $('#modal-checklist').modal('show')
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