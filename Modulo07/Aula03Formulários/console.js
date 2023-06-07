// comandos usados no navegador

//criando variável com id do documento html
let nomeBeneficiario = document.getElementById('nome-beneficiario')

//retorna oque está na variável
nomeBeneficiario

//define o valor da variável
nomeBeneficiario.value = 'Jefferson Martendal'

//exibe o tipo da variável
nomeBeneficiario.type

//exibe o id da variável
nomeBeneficiario.id

//exibe se o campo é obrigatório
nomeBeneficiario.required

//exibe o placeholder
nomeBeneficiario.placeholder

//definindo uma variável
let valorDeposito = document.getElementById('valor-deposito')

//da erro devido a ser tipo number e não texto
valorDeposito.value = 'dez'

//define o valor para 1000
varlorDeposito.value = 1000

//retorna um array separado por espaço oque está dentro dele que no caso seria o nome completo
nomeBeneficiario.value.split(' ')

//verificar o valor e tamanho do array retornado
nomeBeneficiario.value.split(' ').length

//retorna verdadeiro ou falso dependendo do tamanho do nome
nomeBeneficiario.value.split(' ').length > 2

//desativa o botão do ID
document.getElementById('btn-depositar').disabled = true

//ativa o botão do ID que estava desativado
document.getElementById('btn-depositar').disabled = false

//o botão ficará desabilitado caso a condição do nome do beneficiario for menor que 3
document.getElementById('btn-depositar').disabled = nomeBeneficiario.value.split(' ').length < 3