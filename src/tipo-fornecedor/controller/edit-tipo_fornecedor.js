$(document).ready(function() {

    $('#table-tipoF').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Edição de tipo de fornecedor')

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
                        $('#idTipoFornecedor').val(dado.dados.idTipoFornecedor)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-tipoF').modal('show')
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