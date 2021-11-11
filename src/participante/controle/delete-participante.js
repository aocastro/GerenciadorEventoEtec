$(document).ready(function() {

    $('#table-participante').on('click', 'button.btn-delete', function(e) {

        e.preventDefault()

        let idParticipante = `idParticipante=${$(this).attr('id')}`

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
                    data: idParticipante,
                    url: 'src/participante/modelo/delete-participante.php',
                    success: function(dados) {
                        Swal.fire({
                            title: 'Elevent',
                            text: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'OK'
                        })

                        $('#table-participante').DataTable().ajax.reload()
                    }
                })
            }
        }))

    })
})