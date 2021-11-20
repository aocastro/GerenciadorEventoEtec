$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova checklist')
        $('.modal-body').load('src/checklist/visao/checklist.html', function() {


            // $.ajax({
            //     type: 'POST',
            //     dataType: 'json',
            //     assync: true,
            //     url: 'src/tipo-fornecedor/model/all-tipo_fornecedor.php',
            //     success: function(dados) {
            //         for (const dado of dados) {
            //             $('#tipo_fornecedor_idTipoFornecedor').append(`<option value="${dado.idTipoFornecedor}">${dado.NomeTipoFornecedor}</option>`)
            //         }
            //     }
            // })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-checklist').modal('show')
    })
})