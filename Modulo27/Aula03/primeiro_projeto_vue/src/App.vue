<script setup>
const nome = "Jefferson Martendal"
const meuObj = {
  nome: "Jefferson",
  filmeFavorito: "Mr. Nobody"
}

function dizOla(nome) {
  return `${nome} diz oi`
}

const enderecoDaImagemDoBatman = "https://i0.wp.com/www.crossovernerd.com/wp-content/uploads/2019/07/Batman_guia_leitura_cronologica.jpg?fit=1280%2C720&ssl=1"

const botaoEstaDesabilitado = false
</script>

<template>
  <h1>{{ dizOla("Paula") }}</h1>
  <img :src="enderecoDaImagemDoBatman" alt="">

  <button :disabled="!botaoEstaDesabilitado">Enviar mensagem</button>
</template>

<style scoped>
</style>
