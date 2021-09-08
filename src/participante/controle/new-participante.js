$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo participante')

        $('.modal-body').load('src/participante/visao/form-participante.html')

        // $('#idTipo').setAttribute(value, '2')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-participante').modal('show')
    })
})