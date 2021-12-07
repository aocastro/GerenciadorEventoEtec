$(document).ready(function() {
    $('.btn-login').click(function(e) {
        e.preventDefault()

        let dados = $('#login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/participante/modelo/login-participante.php',
            success: function(dados) {
                if (dados.tipo == 'success') {
                    $(location).attr('href', 'adm-homepage.html');
                } else {
                    Swal.fire({
                        title: 'Elevent',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })

})