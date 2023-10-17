"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// for (let i = 0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}` )
// }

redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var lista = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(lista);
var paula = lista.find(function (item) {
  return item.nome == 'Paula'; // true ou false
});

console.log(paula);
var indiceDaPaula = lista.findIndex(function (item) {
  return item.nome == 'Paulo'; // true ou false
});

console.log(indiceDaPaula);
lista.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosSaoDeFrontend = lista.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoDeFrontend);
var existeAlgumAlunoDeBackend = lista.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoDeBackend);
function filtraAlunosDeBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosDeBackend = lista.filter(filtraAlunosDeBackend);
console.log(alunosDeBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var i = 0; i < nums.length; i++) {
  somaComFor += nums[i];
}
console.log(somaComFor);
var nomesDosAlunos = lista.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome, " ");
  return acumulador;
}, '');
console.log(nomesDosAlunos);

// const numeros = [1, 2, 3, 4, 5]
// const dobroDosNumeros = numeros.map(function(numeroAtual) {
//     return numeroAtual * 2
// })

// console.log(dobroDosNumeros)