$(document).ready(function() {

    $('.botao').click(function(e) {
        e.preventDefault()

        // $('.text-gray-dark').empty()
        // $('.media-body').empty()

        // $('strong').append('Aqui virá o nome do evento!')

        // let dados = $('#form-tipo').serialize()

        var dados = `&operacao=insert`

        // var nomeEvento = dado.dados.idEvento
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/inscricao/model/save-inscricao.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Elevent',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                // $('#modal-participante').modal('hide')
                // $('#table-participante').DataTable().ajax.reload()
            }
        })

        // var nomeSetor = dado.dados.tipo_fornecedor_idTipoFornecedor
        //                 $.ajax({
        //                     type: 'POST',
        //                     dataType: 'json',
        //                     url: 'src/tipo-fornecedor/model/all-tipo_fornecedor.php',
        //                     success: function(dados) {
        //                         for (const dado of dados) {
        //                             if (dado.idTipoFornecedor == nomeSetor) {
        //                                 $('#tipo_fornecedor_idTipoFornecedor').append(`<option value="${dado.idTipoFornecedor}">${dado.NomeTipoFornecedor}</option>`)
        //                             }
        //                         }
        //                     }
        //                 })

        // $.ajax({
        //     type: 'POST',
        //     dataType: 'json',
        //     assync: true,
        //     data: dados,
        //     url: 'src/inscricao/model/save-inscricao.php',
        //     success: function(dados) {
        //         Swal.fire({
        //             title: 'Elevent',
        //             text: dados.mensagem,
        //             icon: dados.tipo,
        //             confirmButtonText: 'OK'
        //         })
        //         alert(dados)
        //             // $('#modal-tipo').modal('hide')
        //             // $('#table-tipo').DataTable().ajax.reload()
        //     }
        // })
    })

})