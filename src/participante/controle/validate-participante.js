$(document).ready(function() {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/participante/modelo/validate-participante.php',
        success: function(dados) {
            Swal.fire({
                title: 'Elevent',
                text: dados.mensagem,
                icon: dados.tipo,
                confirmButtonText: 'OK'
            })

            if (dados.tipo === 'error') {
                $(location).attr('href', 'login.html');
            }
        }
    })
})