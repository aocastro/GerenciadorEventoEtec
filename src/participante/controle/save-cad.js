$(document).ready(function() {

    $('.btn-save').click(function(e) {
        e.preventDefault()

        let dados = $('#form-participante').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

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
                window.location.href = "adm-homepage.html";
            }
        })
    })
})