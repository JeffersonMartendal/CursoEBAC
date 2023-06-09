// cria uma variável constante para form
const form = document.getElementById('form-deposito')

//função para validar se o nome está completo
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}


//remover o evento de carregamento de página após apertar o botão de depositar
form.addEventListener('submit',function(e) {
    let formEvalido = false
    e.preventDefault() //cancela a ação padrão do submit assim não tendo o reload
    const nomeBeneficiario = document.getElementById('nome-beneficiario')
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`

    //verificar se o formulário é valido
    formEvalido = validaNome(nomeBeneficiario.value)
    if(formEvalido) {
        alert(mensagemSucesso)

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''

    } else {
        alert("O nome não está completo")
    }
})

console.log(form)