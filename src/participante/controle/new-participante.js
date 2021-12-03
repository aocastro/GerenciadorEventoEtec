$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo participante')
        $('.modal-body').load('src/participante/visao/form-participante.html')

        $.ajax({
                type: 'POST',
                dataType: 'json',
                assync: true,
                url: 'src/tipo-usuario/model/all-tipo.php',
                success: function(dados) {
                    for (const dado of dados) {
                        $('#idTipo').append(`<option value="${dado.idTipo}">${dado.nomeTipo}</option>`)
                    }
                }
            })
            // $('#idTipo').setAttribute(value, '2')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-participante').modal('show')
    })
})