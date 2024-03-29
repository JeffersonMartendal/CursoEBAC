import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Jefferson" endereco="https://github.com/JeffersonMartendal.png"/>

      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
