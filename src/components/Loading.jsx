import React from 'react'

export const Loading = () => {


  return (
    <>
        
        <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
       </div>
      </div>

    </>
  )
}

//explicacion:

/*
1) Cree un estado , que parte en false:

const [loading , setLoading] = useState(false)

2) Lo puse al comienzo de la solicitud (cuando se busca el personaje) , 

 setLoading(true) 

3)  ingresa a un if donde esta el spinner(este se mostrara al estar procesando la busqueda) , cuando termina la busqueda pasa a mostrar a los personajes.

 
if(loading){ 
return <Loading />
}


(en caso de que sea un error o no exista el personaje, agregamos a finally:)

setLoading(false)  //para cortar la ejecucion del spinner

*/