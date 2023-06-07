// COMANDOS USADOS NO NAVEGADOR

//retorna um array com os 3 inputs da pagína html usando name
document.getElementsByTagName('input')

//retorna html do campo do id
document.getElementById('nome-beneficiario')

//retorna html do campo do id
document.getElementById('btn-depositar')

//criar uma cadeia de seleção de elementos
document.getElementsByTagName('form')[0].getElementsByClassName('button')

//retorna html do campo da classe
document.getElementsByClassName('container')

//retorna html da seleção querySelector 
document.querySelector('button')

//retorna html da seleção querySelector trazendo o input do tipo numero
document.querySelector('input[type=number]')

//retorna todos os elementos que correspondem a essa consulta
document.querySelectorAll('input[type=number]')

//retorna html usando input com a classe
document.querySelector('input#numero-conta')

//retorna null recomendado usar if para identificar a existencia do elemento
document.querySelector('h3')

//retorna o corpo html
document.body

//retorna a cabeça do html
document.head


