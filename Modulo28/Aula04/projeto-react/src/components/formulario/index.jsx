import { useState, useEffect } from 'react'

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    // mount - quando o componente é montado
    // update - quando o componente é atualizado
    // onmount - quando o componente é desmontado

    useEffect(() => {
        console.log("O componente iniciou")

        return () => {
            console.log("O componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])
    
    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            // console.log(estadoAnterior)

            // estadoAnterior = valornovo

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