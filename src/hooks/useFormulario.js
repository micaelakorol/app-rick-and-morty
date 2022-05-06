import { useState } from 'react'

export const useFormulario = (initialState = {}) => { 

const [inputs, setInputs] = useState(initialState) 

//accedo a los valores , realizo una copia

const handleChange = (e) => {
  const {name , value , checked , type} = e.target 
    setInputs((old) => ({  
      ...old, 
    [name]: type === "checkbox" ? checked : value,  //validacion en caso de un input checkbox
    }))
}
const reset = () => {
    setInputs(initialState)
}
//devolvemos:
  return [inputs,handleChange,reset]
}
