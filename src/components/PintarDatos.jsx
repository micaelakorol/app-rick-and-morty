  import React, { useEffect, useState } from 'react'
  import Swal from 'sweetalert2'
  import { Loading } from './Loading'
  import Personaje from './Personaje'
  
  const PintarDatos = ({nombrePersonaje}) => {

  const [personajes,setPersonajes] = useState([]) 
  const [loading , setLoading] = useState(false)  //SPINNER

    useEffect (() => {
  consumirApi(nombrePersonaje)

  },[nombrePersonaje]) //cada vez que nombrePersonaje cambie, se hace una nueva solicitud en fetch

  ///////////////////////////////////////////////////////////////////////////////////

  const consumirApi = async(nombre) => {
  //SPINNER: 1-
            setLoading(true) 

  try {

  const res = await fetch (
  `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
  );
 //error
    
  if(!res.ok){

    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Personaje no encontrado',
    
    })
  }

                const datos = await res.json()
  setPersonajes(datos.results)
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false) 
  }
  }

  if(loading){ 
  return <Loading />
  }
    return (
  <div className='row mt-4 mr-4' >
  {personajes.map((item) => (
                  <Personaje key={item.id} personaje={item} />
              ))}
  </div> 
    )
  }

  export default PintarDatos
