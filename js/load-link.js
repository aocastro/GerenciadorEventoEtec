$(document).ready(function() {
    $('.nav_link').click(function(e) {

        e.preventDefault()

        // Capturando o link
        let url = $(this).attr('href')
            // alert('Você clicou')

        // Limpando a div container com o id conteudo
        $('#conteudo').empty()

        // Inserindo o novo conteúdo dentro de id conteudo
        $('#conteudo').load(url)
    })
})