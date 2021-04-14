$(document).ready(function() {
    $('.btn-login').click(function(e) {
        e.preventDefault()

        var dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/participante/modelo/login-participante.php',
            success: function(dados) {

                if (dados.result == true) {
                    $(location).attr('href', 'index.html');
                } else {
                    // Demonstrar se deu certo ou errado...
                    $('#form-login').after(`
                        <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                            <strong>Id ou senha, informado errado... Tente novamente!</strong>
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                    `)
                }



                $('.btn-save').show()
                    // Limpando os campos do nosso formulário
                $('#id').val('')
                $('#senha').val('')
            }
        })
    })
})