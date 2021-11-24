$(document).ready(function() {

    $('.logout').click(function(e) {
        e.preventDefault()
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/participante/modelo/logout-participante.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Elevent',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                if (dados.tipo === 'success') {
                    $(location).attr('href', 'login.html');
                }
            }
        })
    })
})