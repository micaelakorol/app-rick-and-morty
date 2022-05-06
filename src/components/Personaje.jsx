  import React from 'react'

  //recibe a los item (personajes) del array que recorrimos en PintarDatos:
  //como anteriormente iteramos con map , ahora hacemos unas card para pintar esos personajes dentro:
  const Personaje = ({personaje}) => {
  //desestructuramos: nos fijamos en el state, de que manera vienen los datos en este caso, como obj. usamos{}

  const {name , species , image ,gender} = personaje //para no llamar a personaje.name ,etc
  //caracteristicas qe quiero sacar de cada personaje(tbm aparecen en el status de la consola)

    return (
      <>

  <div className='col-md-4 mb-2'>

  <img src={image} alt="" className='card-img-top'/>
  <div className="card-body">
    <h5>{name}</h5> {/*pintamos esas caracteristicas de forma dinamica que desestructuramos aqui*/}
    <p>{species}</p>
    <p>{gender}</p>
  </div>
  </div>

      </>
    )
  }

  export default Personaje