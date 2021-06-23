$(document).ready(function() {
    $('#table-tipo').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idTipo = `idTipo=${$(this).attr('id')}`

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
                    data: idTipo,
                    url: 'src/tipo-usuario/model/delete-tipo.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Elevent',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-tipo').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})