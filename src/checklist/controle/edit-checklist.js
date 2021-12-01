$(document).ready(function() {

    $('#table-checklist').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()


        $('.modal-title').append('Edição da checklist')

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
                        $('#idChecklist').val(dado.dados.idChecklist)
                        $('#objeto').val(dado.dados.objeto)
                        $('#tarefa').val(dado.dados.tarefa)
                    })
                    $('.btn-save').show()
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