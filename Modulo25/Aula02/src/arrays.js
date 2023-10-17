const redesSociais = ['Facebook', 'Instagram', 'Twitter']

// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}` )
// }

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}` )
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner']

const lista = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})

console.log(lista)

const paula = lista.find(function(item) {
    return item.nome == 'Paula' // true ou false
})

console.log(paula)

const indiceDaPaula = lista.findIndex(function(item) {
    return item.nome == 'Paulo' // true ou false
})

console.log(indiceDaPaula)

lista.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = lista.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend)

const existeAlgumAlunoDeBackend = lista.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend)

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend'
}

const alunosDeBackend = lista.filter(filtraAlunosDeBackend)

console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual
    return acumulador
}, 0)

console.log(soma)

let somaComFor = 0

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor)

const nomesDosAlunos = lista.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos)

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual) {
//     return numeroAtual * 2
// })

// console.log(dobroDosNumeros)

