$(document).ready(function() {

    $.ajax({
        type: 'POST',
        dataType: 'JSON',
        assync: true,
        url: 'src/participante/modelo/verify-type.php',
        success: function(dados) {

            if (dados.tipo == 15) {
                $('.participante').hide()
            } else {
                $('.participante').show()
            }

        }

    })


})