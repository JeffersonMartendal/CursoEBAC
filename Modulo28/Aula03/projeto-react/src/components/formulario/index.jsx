import { useState } from 'react'

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')
    
    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            // estadoAnterior = valurnovo

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder='Seu nome' onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B"onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C"onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            <p>O aluno foi aprovado</p>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario