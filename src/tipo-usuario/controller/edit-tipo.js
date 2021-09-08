$(document).ready(function() {

    $('#table-tipo').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição de tipo participante')

        let idTipo = `idTipo=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idTipo,
            url: 'src/tipo-usuario/model/view-tipo.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo-usuario/view/form-tipo.html', function() {
                        $('#nomeTipo').val(dado.dados.nomeTipo)
                        $('#idTipo').val(dado.dados.idTipo)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-tipo').modal('show')
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