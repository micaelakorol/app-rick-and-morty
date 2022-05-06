  import React, { useEffect, useState } from 'react'
  import Swal from 'sweetalert2'
  import { Loading } from './Loading'
  import Personaje from './Personaje'
  //Aca hago la solicitud a la API con useEffect y fetch-

  //solicitud a fetch , la configuramos en try : 
  //la url en fetch , va con `` porque, en la url , donde dice name= le agregamos nombrePersonaje
  const PintarDatos = ({nombrePersonaje}) => {

  const [personajes,setPersonajes] = useState([]) //finalmente , todos los personajes estan en formato JSON, en personajes y setPer..
  const [loading , setLoading] = useState(false)  //SPINNER

  //si no le ponemos [],  hace la peticion a la API en cada renderizado.
    useEffect (() => {
  consumirApi(nombrePersonaje)

  },[nombrePersonaje]) //cada vez que nombrePersonaje cambie, se hace una new solicitud en fetch


  ///////////////////////////////////////////////////////////////////////////////////

  const consumirApi = async(nombre) => {
  //SPINNER: 1-
            setLoading(true)  //cuando comienza la solicitud, nuestro loading(spinner) parte en true.

  try {

  const res = await fetch (
  `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`


  ); //espero a que mi promesa se ejecute y la mando a const res

  //ok es lo que aparece en la consola cdo se esta consumiendo la api , si ok:true , se encontro el personaje , ok.false hay un error , no se encontro.

  //////////////////////////////////////////////////en caso de no haber encontrado el personaje:ERROR/////////////////////////////////////////
  if(!res.ok){

    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Personaje no encontrado',
    
    })
  }
                              //si no hay errores , traigo toda la data de la api , a const res=...

                const datos = await res.json()  //paso todo lo de res a const datos
                    //console.log(datos)  //pinta todos los datos en la consola (pasamos todo esto a un state array)
    
                //datos : envia los resultados de los personajes a setPersonajes
  setPersonajes(datos.results)
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false) 
  }
  }


  if(loading){ // 2 - si es true , ingresa al if , y luego retorna los personajes
  return <Loading />
  }

  //iteramos los personajes de la api : almacenados en [personajes y setPersonajes] 
  //luego enviamos esos item al componente personaje.jsx

  //item = contiene a los personajes ; key = id (ya lo incluye la api) es como va a identificar a cada personaje
  // ; personaje(es el nombre de como va a viajar al otro componente) =item  (son los datos personajes de la api)
    return (
  <div className='row mt-4 mr-4' >


  {personajes.map((item) => (
                  <Personaje key={item.id} personaje={item} />
              ))}




  </div> 
    )
  }

  export default PintarDatos

  //error que puede pasar: cuando iteramos o hacemos algo que lleve {} en return, debe ir {palabra} si no,si las llaves estan desordenadas
  // sera interpretado como objeto y retornara error