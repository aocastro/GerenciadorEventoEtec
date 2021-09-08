$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-fornecedor').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/fornecedor/modelo/save-fornecedor.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Elevent',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-fornecedor').modal('hide')
                $('#table-fornecedor').DataTable().ajax.reload()
            }
        })
    })

})