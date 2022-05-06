  import React, { useState } from 'react'
  import Formulario from './components/Formulario'
  import PintarDatos from './components/PintarDatos'


  //COMPONENTE PRINCIPAL : 

  const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState('') //ahora tienen el valor de la prop. nombre (de los input)

    return (
      <>

  <h1>App Rick And Morty</h1>
  <Formulario setNombrePersonaje={setNombrePersonaje} /> {/*lo enviamos al componente formulario || setNombrePersonaje actualiza el method.*/}
  <PintarDatos nombrePersonaje={nombrePersonaje} />

      </>
    )
  }

  export default App
  //el modificador set, se envia al form , porque es el que muta,va a cambiar ,cada vez que elija otro personaje
  // y el nombrePersonaje, se envia a PintarDatos, ya que es donde se va a desplegar la informacion del personaje que elegimos

  //Debemos traer de formulario.jsx a app.jsx (componente padre) el nombre/palabra que ingreso el user en el input, (lo que esta buscando)
  // luego hacerlo viajar a PintarDatos,hacer la solicitud a la api,  para que busque ese personaje en especifico que escribimos en el input.