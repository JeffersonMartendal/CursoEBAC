function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }
    
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    this.dizCargo = function() {
        console.log(this.cargo)
    }

    Pessoa.call(this, nome)
}

const funcionario1 = new Funcionario("Maria", "Dev Front-end", 5000)
const pessoa = new Pessoa("Jefferson")
funcionario1.dizOi()
funcionario1.dizCargo()