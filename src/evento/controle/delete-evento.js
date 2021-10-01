$(document).ready(function() {

    $('#table-evento').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idEvento = `idEvento=${$(this).attr('id')}`

        Swal.fire({
            title: 'Elevent',
            text: 'Deseja realmente excluir esse registro?',
            icon: 'question',
            showCancelButton: true,
            confirmButton: 'Sim',
            cancelButton: 'Não'
        }).then((result => {
            if (result.value) {

                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: idEvento,
                    url: 'src/evento/modelo/delete-evento.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Elevent',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-evento').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})