
  import {useFormulario} from '../hooks/useFormulario' //importo el hook
  import Swal from 'sweetalert2'
  const Formulario = ({setNombrePersonaje}) => {

  const [inputs,handleChange,reset] = useFormulario({ 
  nombre:'', 
  })

  const {nombre} = inputs

  const handleSubmit = e => {
    e.preventDefault()

    //validacion + alerta: 
  if(!nombre.trim()){

  return Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No estan permitidos los espacios',

  })
  }
  setNombrePersonaje(nombre.trim().toLowerCase()); 
 reset()
  }

    return (
      <form onSubmit={handleSubmit}>
  <input type="text"
  placeholder='Ingrese el Personaje'
  className='form-control mb-2'
  value={nombre}
  onChange={handleChange}
  name='nombre' //es como su id
  autoComplete='off'
/>
  <button type='submit' className='btn btn-danger'> Buscar </button>
 </form>
    )
  }

  export default Formulario
