let meuMap = new Map()
meuMap.set("nome", "Jefferson")
meuMap.set("stack", "html, css, js")

console.log(meuMap)

const nome = meuMap.get("nome")

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

meuMap.delete("stack")

console.log(meuMap)

// [nome => Jefferson]
// [stack => html, css, js]

const cpfs = new Set()

cpfs.add('78984992046')
cpfs.add('58177050010')
cpfs.add('17718835022')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Jefferson Martendal', 'Gian Souza', 'Maria Isabel', 'Luana', 'Luana', 'Jefferson Martendal']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)