$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar nova checklist')
        $('.modal-body').load('src/checklist/visao/checklist.html', function() {


            $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/evento/modelo/all-evento.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#idEvento').append(`<option value="${dado.idEvento}">${dado.nome}</option>`)
                    }
                }
            })
        })

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-checklist').modal('show')
    })
})