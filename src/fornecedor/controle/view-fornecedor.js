$(document).ready(function() {

    $('#table-fornecedor').on('click', 'button.btn-view', function(e) {

        e.preventDefault()

        // Alterar as informações do modal para apresentação dos dados
        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Visualização do fornecedor')

        let idFornecedor = `idFornecedor=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: idFornecedor,
            url: 'src/fornecedor/modelo/view-fornecedor.php',
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/fornecedor/visao/form-fornecedor.html', function() {
                        $('#nome').val(dado.dados.nome)
                        $('#nome').attr('readonly', 'true')
                        $('#email').val(dado.dados.email)
                        $('#email').attr('readonly', 'true')
                        $('#telefone').val(dado.dados.telefone)
                        $('#telefone').attr('readonly', 'true')
                        $('#cep').val(dado.dados.cep)
                        $('#cep').attr('readonly', 'true')
                        $('#rua').val(dado.dados.rua)
                        $('#rua').attr('readonly', 'true')
                        $('#bairro').val(dado.dados.bairro)
                        $('#bairro').attr('readonly', 'true')
                        $('#cidade').val(dado.dados.cidade)
                        $('#cidade').attr('readonly', 'true')
                        $('#uf').val(dado.dados.uf)
                        $('#uf').attr('readonly', 'true')
                        $('#numero').val(dado.dados.numero)
                        $('#numero').attr('readonly', 'true')

                        var nomeSetor = dado.dados.tipo_fornecedor_idTipoFornecedor
                        $.ajax({
                            type: 'POST',
                            dataType: 'json',
                            url: 'src/tipo-fornecedor/model/all-tipo_fornecedor.php',
                            success: function(dados) {
                                for (const dado of dados) {
                                    if (dado.idTipoFornecedor == nomeSetor) {
                                        $('#tipo_fornecedor_idTipoFornecedor').append(`<option value="${dado.idTipoFornecedor}">${dado.NomeTipoFornecedor}</option>`)
                                    }
                                }
                            }
                        })
                    })
                    $('.btn-save').hide()
                    $('#modal-fornecedor').modal('show')
                } else {
                    Swal.fire({ // Inicialização do SweetAlert
                        title: 'Elevent', // Título da janela SweetAler
                        text: dado.mensagem, // Mensagem retornada do microserviço
                        type: dado.tipo, // Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })

    })
})