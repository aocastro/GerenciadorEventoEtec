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
                    // console.log(dados)
                    // window.location.href = "adm-homepage.html";
            }
        })
    })
})