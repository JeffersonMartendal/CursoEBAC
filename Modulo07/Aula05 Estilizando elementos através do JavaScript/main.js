// cria uma variável constante para form
const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario')
let formEvalido = false

//função para validar se o nome está completo
function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ')
    return nomeComoArray.length >= 2
}

//evento de pressionar o botão depositar/submit
form.addEventListener('submit',function(e) {
    
    e.preventDefault() //cancela a ação padrão do submit assim não tendo o reload

    //cada campo do corpo html recebe uma variável no JS
    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')

    //variável para mensagem final de sucesso
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`

    //verificar se o formulário é valido
    formEvalido = validaNome(nomeBeneficiario.value)
    if(formEvalido) {
        //cria uma variável para exibir a mensagem de sucesso em um parágrafo
        const containerMensagemSucesso = document.querySelector('.success-message')
        //escreve  a mensagem de sucesso no parágrafo
        containerMensagemSucesso.innerHTML = mensagemSucesso
        //altera o estilo do parágrafo para display block já que ele está no documento css como none
        containerMensagemSucesso.style.display = 'block'

        //altera os valores para vazios 
        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''

    } else {
        nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block '
    }
})

//colocando evento de mudança de campo
nomeBeneficiario.addEventListener('keyup', function(e) {
    console.log(e.target.value)
    formEvalido = validaNome(e.target.value)

    if(!formEvalido) {
        nomeBeneficiario.classList.add('error')
    //    nomeBeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block'
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none'
    }
}) 