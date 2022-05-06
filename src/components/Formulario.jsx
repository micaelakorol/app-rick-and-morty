
  import {useFormulario} from '../hooks/useFormulario'   //importamos de forma nombrada ese hook
  import Swal from 'sweetalert2'
  //SIEMPRE PONER EL NAME EN EL input , SI NO , NO VAMOS A PODER ESCRIBIR: 
  //capturamos lo que se envia de app.jsx ya destructurado con {}
  const Formulario = ({setNombrePersonaje}) => { //set... nos trae el nombre actualizado que se ingreso para poder buscarlo

  //reutilizamos el hook ya creado (useFormulario)
  //como tenemos 1 solo input, puede recibir el initialState o directamete creamos el obj.
  //     CAPTA   ACCEDE      RESETEA
  const [inputs,handleChange,reset] = useFormulario({ 
  nombre:'', //le podemos agregar las prop. que queramos al obj. (asi es como parte nombre x defecto)
  })

  const {nombre} = inputs // si no desestructuramos, siempre que llamemos a nombre tenemos que poner: inputs.nombre

  //envio de form: submit
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
  //traemos al modificador setNombre... vacio , y se reemplaza x lo que escribio el user en el input (.nombre) = setNombre...
  //.trim() limpia los espacios en blanco adelante y atras al almacenarlo || lower.... lo pasa a minuscula (se ve en app State:)
  setNombrePersonaje(nombre.trim().toLowerCase()); 

    reset()  //reinicia elform
  }

    return (
      <form onSubmit={handleSubmit}>
  <input type="text"
  placeholder='Ingrese el Personaje'
  className='form-control mb-2'
  value={nombre}  //capta el nombre , fue inicializado como un obj. vacio en el hook. | se hace una copia de lo que se ingresa, y se guarda en inputs
  onChange={handleChange}
  name='nombre' //es como su id
  autoComplete='off'


  />
  <button type='submit' className='btn btn-danger'> Buscar </button>



      </form>
    )
  }

  export default Formulario
  //inputs: tiene el objeto con todas las prop de (initialState) traidas del hook 
  //handleChange accede al valor q ingresa el user en los inputs en tiempo real
  //reset() resetea el form por defecto (como esta en el objeto{}) ej nombre esta vacio.