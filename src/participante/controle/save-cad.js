$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#cad').serialize()

        dados += `&operacao=insert`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/participante/modelo/save-participante.php',
            success: function(dados) {
                Swal.fire({
                        title: 'Elevent',
                        text: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                    // $(location).attr('href', 'adm-homepage.html');
                    // console.log(dados)
                    // window.location.href = "adm-homepage.html";
            }
        })
        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/participante/modelo/login-participante.php',
            success: function(dados) {
                if (dados.tipo === 'success') {
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