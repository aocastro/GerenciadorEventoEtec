$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-tipoF').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/tipo-fornecedor/model/save-tipo_fornecedor.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Elevent',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-tipoF').modal('hide')
                $('#table-tipoF').DataTable().ajax.reload()
            }
        })
    })

})