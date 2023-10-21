function funcaoMuitoPesada() {
    
} 

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
    for (let i = 0; i < 1000000000; i++) {
        execucoess++
    }
    resolve(execucoes) 
    } catch(e) {
        reject('Deu erro na iteração dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}


// console.log(funcaoMuitoPesada())


async function execusaoPrincipal() {
    console.log("Inicio")
    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('jefferson@gmail.com', 123456).then(resultado => {
        console.log(resultado)
    })
    try {
        const resultado = await funcaoMuitoPesadaPromise
        console.log(resultado)
        console.log("Fim")
    } catch(e) {
        console.log(e)
    }
}

execusaoPrincipal()