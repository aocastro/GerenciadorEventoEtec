$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-evento').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/evento/modelo/save-evento.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Elevent',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-evento').modal('hide')
                $('#table-evento').DataTable().ajax.reload()
            }
        })
    })

})