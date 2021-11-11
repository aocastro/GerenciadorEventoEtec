$(document).ready(function() {

    $('#table-fornecedor').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idFornecedor = `idFornecedor=${$(this).attr('id')}`

        Swal.fire({
            title: 'Elevent',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não'
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idFornecedor,
                    url: 'src/fornecedor/modelo/delete-fornecedor.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Elevent',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-fornecedor').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})