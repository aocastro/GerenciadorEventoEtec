$(document).ready(function() {

    $('#table-tipoF').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()


        $('.modal-title').append('Visualização do tipo de fornecedor')

        let idTipoFornecedor = `idTipoFornecedor=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idTipoFornecedor,
            url: 'src/tipo-fornecedor/model/view-tipo_fornecedor.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/tipo-fornecedor/view/form-tipo_fornecedor.html', function() {
                        $('#nomeTipoFornecedor').val(dado.dados.NomeTipoFornecedor)
                        $('#nomeTipoFornecedor').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-tipoF').modal('show')
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