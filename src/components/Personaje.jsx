  import React from 'react'

  const Personaje = ({personaje}) => {

  const {name , species , image ,gender} = personaje
    return (
      <>

  <div className='col-md-4 mb-2'>

  <img src={image} alt="" className='card-img-top'/>
  <div className="card-body">
    <h5>{name}</h5>
    <p>{species}</p>
    <p>{gender}</p>
  </div>
  </div>
 </>
    )
  }

  export default Personaje
