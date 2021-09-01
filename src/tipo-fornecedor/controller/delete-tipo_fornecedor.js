$(document).ready(function() {
    $('#table-tipoF').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idTipoFornecedor = `idTipoFornecedor=${$(this).attr('id')}`

        Swal.fire({
            title: 'Elevent',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonTexto: 'Sim',
            cancelButtonText: 'Não',
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idTipoFornecedor,
                    url: 'src/tipo-fornecedor/model/delete-tipo_fornecedor.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Elevent',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipoF').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})