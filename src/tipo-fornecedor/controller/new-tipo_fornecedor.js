$(document).ready(function() {
    $('.btn-new').click(function(e) {
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adicionar novo tipo de fornecedor')

        $('.modal-body').load('src/tipo-fornecedor/view/form-tipo_fornecedor.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-tipoF').modal('show')
    })
})