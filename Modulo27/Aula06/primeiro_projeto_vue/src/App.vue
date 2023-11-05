<script setup>
import { reactive } from 'vue'
const nome = "Jefferson Martendal"
const meuObj = {
  nome: "Jefferson",
  filmeFavorito: "Mr. Nobody"
}

function dizOla(nome) {
  return `${nome} diz oi`
}

const enderecoDaImagemDoBatman = "https://i0.wp.com/www.crossovernerd.com/wp-content/uploads/2019/07/Batman_guia_leitura_cronologica.jpg?fit=1280%2C720&ssl=1"

const imagemSuperman = "https://i.pinimg.com/474x/a5/4a/64/a54a640e1472797500d0c1cf2c34a711.jpg"

const botaoEstaDesabilitado = false

const gostaDoBatman = false
const gostaDoSuperman = false

const estaAutorizado = false

// let contador = 0
const estado = reactive({
  contador: 0,
  email: '',
  saldo: 5000,
  transferindo: 0,
  nomes : ['Jefferson', 'Paulo', 'Luisa', 'Mônica'],
  nomeInserir: '',
})

function incrementar() {
  estado.contador++
}

function decrementar() {
  estado.contador--
}

function alteraEmail(evento) {
  estado.email = evento.target.value
}

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado
  return saldo - transferindo
}

function validaValorTransferencia() {
  const { saldo, transferindo } = estado
  return saldo >= transferindo
}

function cadastrarNome() {
  if (estado.nomeInserir.length >= 3) {
    estado.nomes.push(estado.nomeInserir)
  } else {
    alert("Digite mais caracteres")
  }
  console.log(estado)
}
 
</script>

<template>
  <h1>{{ dizOla("Paula") }}</h1>
  <img v-if="gostaDoBatman" :src="enderecoDaImagemDoBatman" alt="">
  <img v-else-if="gostaDoSuperman" :src="imagemSuperman" alt="">
  <h2 v-else>Não curte heróis da DC</h2>

  <h1 v-if="estaAutorizado">Bem-vindo</h1>
  <h1 v-else>Não possui acesso</h1>

  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}

  <!-- <input type="email" @keyup="evento => estado.email = evento.target.value"> -->
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }}<br>
  Saldo depois da transfêrencia {{  mostraSaldoFuturo() }}<br>

  <input 
  class="campo" 
  :class="{ invalido: !validaValorTransferencia()}" 
  @keyup ="evento => estado.transferindo = evento.target.value" 
  type="number" placeholder="Quantida para transferir"/>

  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Valor maior que o saldo</span>

  <br />
  <hr />

  <ul>
    <li v-for="nome in estado.nomes">
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastrarNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">{{ nome }}</h3>
</template>

<style scoped>

img {
  max-width: 200px;
}

.invalido {
  outline-color: red;
  border-color: red;
}

.campo {
  border: 2px solid #000;
}
</style>
