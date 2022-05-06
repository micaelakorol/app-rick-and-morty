import { useState } from 'react'

export const useFormulario = (initialState = {}) => { //se inicia como un obj vacio {}

const [inputs, setInputs] = useState(initialState) //inputs y set.. guarda lo que se ingresa en el initial..


const handleChange = (e) => {
  const {name , value , checked , type} = e.target //accede a esos valores: name,value..etc
    setInputs((old) => ({  
      ...old, //haca una copia de setInputs(del objeto)
    [name]: type === "checkbox" ? checked : value,  //pequeña validacion cuando tenemos un input tipo checkbox
    

    }))
}

const reset = () => {
    setInputs(initialState) //reiniciar el formulario
}
//devolvemos:
  return [inputs,handleChange,reset]
}
