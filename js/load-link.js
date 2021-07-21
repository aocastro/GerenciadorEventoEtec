$(document).ready(function() {
    $('.nav-link').click(function(e) {

        e.preventDefault()

        // Capturando o link
        let url = $(this).attr('href')

        // Limpando a div container com o id conteudo
        $('#conteudo').empty()

        // Inserindo o novo conteúdo dentro de id conteudo
        $('#conteudo').load(url)
    })
})