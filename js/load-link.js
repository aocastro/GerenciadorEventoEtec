$(document).ready(function() {
    $('.nav_link').click(function(e) {

        e.preventDefault()

        // Capturando o link
        let url = $(this).attr('href')
            // alert('Você clicou')

        // Limpando a div container com o id conteudo
        $('#content').empty()

        // Inserindo o novo conteúdo dentro de id conteudo
        $('#content').load(url)
    })
})