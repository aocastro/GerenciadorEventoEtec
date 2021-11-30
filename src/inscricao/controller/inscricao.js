$(document).ready(function() {

    $('.botao').click(function(e) {
        e.preventDefault()

        // let dados = $('#form-tipo').serialize()

        dados += `&operacao=${$('.botao').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/inscricao/model/save-inscricao.php',
            success: function(dados) {
                // Swal.fire({
                //     title: 'Elevent',
                //     text: dados.mensagem,
                //     icon: dados.tipo,
                //     confirmButtonText: 'OK'
                // })
                alert(dados)
                    // $('#modal-tipo').modal('hide')
                    // $('#table-tipo').DataTable().ajax.reload()
            }
        })
    })

})