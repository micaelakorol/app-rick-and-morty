  import React, { useState } from 'react'
  import Formulario from './components/Formulario'
  import PintarDatos from './components/PintarDatos'

  const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('')

    return (
      <>
  <h1>App Rick And Morty</h1>
  <Formulario setNombrePersonaje={setNombrePersonaje} /> 
  <PintarDatos nombrePersonaje={nombrePersonaje} />
      </>
    )
  }

  export default App
 
