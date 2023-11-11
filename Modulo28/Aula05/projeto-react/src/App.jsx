import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Jefferson" endereco="https://github.com/JeffersonMartendal.png"/>
      <ReposList/>

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
