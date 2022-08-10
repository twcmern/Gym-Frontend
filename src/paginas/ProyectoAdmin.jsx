import { useParams } from 'react-router-dom'
import useProyectos from '../hooks/useProyectosAdmin'
import { useState, useEffect } from 'react'
import Alerta from '../components/Alerta'


const ProyectoAdmin = () => {
  const [id, setId] = useState(null)
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState('')
  const [email, setEmail] = useState('')
  const [sexo, setSexo] = useState('')
  const [cedula, setCedula] = useState('')
  const [telefono, setTelefono] = useState('')
  const [membresia, setMembresia] = useState('')
  const [fechaFinal, setFechaFinal] = useState('')
  const [vendedor, setVendedor] = useState('')

  const params = useParams()
  const {usuario, cargando, submitUsuario, alerta, obtenerUsuario, mostrarAlerta} = useProyectos()

  useEffect(() => {
    if( params.id ) {
        setId(params.id)
        setNombre(usuario.nombre)
        setEmail(usuario.email)
        setEdad(usuario.edad)
        setSexo(usuario.sexo)
        setCedula(usuario.cedula)
        setTelefono(usuario.telefono)
        setMembresia(usuario.membresia)
        setFechaFinal(usuario.fechaFinal)
        setVendedor(usuario.vendedor)
    } 
    obtenerUsuario(params.id)
  }, [params])

  if(cargando) return 'Cargando...'

  const handleSubmit = async e => {
    e.preventDefault();

    if([nombre, email, edad, sexo, cedula, telefono, membresia, fechaFinal, vendedor].includes('') ) {
        mostrarAlerta({
            msg: 'Todos los Campos son Obligatorios',
            error: true
        })

        return
    }

    // Pasar los datos hacia el provider
    await submitUsuario({ id, nombre, email, edad, sexo, cedula, telefono, membresia, fechaFinal, vendedor})

    setId(null)
    setNombre('')
    setEdad('')
    setEmail('')
    setSexo('')
    setCedula('')
    setTelefono('')
    setMembresia('')
    setVendedor('')
    setFechaFinal('')
  }

  const { msg } = Alerta

  return (
    <>
      <div className=''>
        <div className='flex justify-center font-black text-2xl bg-gray-100 rounded-md my-5 border'>
          {usuario.nombre}
        </div>
        <div className='bg-white border-black border rounded-lg p-2'>
        <div className='font-black text-4xl my-2'>
          Cedúla: {usuario.cedula}
        </div>
        <div className='font-black text-4xl my-2'>
          Edad: {usuario.edad}
        </div>
        <div className='font-black text-4xl my-2'>
          Email: {usuario.email}
        </div>
        <div className='font-black text-4xl my-2'>
          Membresia: {usuario.membresia}
        </div>
        <div className='font-black text-4xl my-2'>
          Sexo: {usuario.sexo}
        </div>
        <div className='font-black text-4xl my-2'>
          Telefono: {usuario.telefono}
        </div>
        <div className='font-black text-4xl my-2'>
          Vendedor: {usuario.vendedor}
        </div>
        <div className='font-black text-4xl my-2'>
          Fecha Final: {usuario.fechaFinal?.split('T')[0]}
        </div>
        </div>
      </div>
      <form 
      className="justify-center font-black text-3xl bg-white rounded-md my-3 border border-1 p-5"
      onSubmit={handleSubmit}
      >
        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="nombre"
            >Nombre De Usuario</label>

            <input
                id="nombre"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.nombre}
                onChange={e => setNombre(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="cedula"
            >Cedúla</label>

            <input
                id="cedula"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.cedula}
                onChange={e => setCedula(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="Edad"
            >Edad</label>

            <input
                id="Edad"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.edad}
                onChange={e => setEdad(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="Email"
            >Email de inicio de sesion y recuperación de contraseña</label>

            <input
                id="Email"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="membresia"
            >Membresia</label>

            <input
                id="membresia"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.membresia}
                onChange={e => setMembresia(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="sexo"
            >Sexo</label>

            <input
                id="sexo"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.sexo}
                onChange={e => setSexo(e.target.value)}
            />
        </div>        

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="telefono"
            >Telefono</label>

            <input
                id="telefono"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.telefono}
                onChange={e => setTelefono(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="vendedor"
            >Vendedor</label>

            <input
                id="vendedor"
                type="text"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.vendedor}
                onChange={e => setVendedor(e.target.value)}
            />
        </div>

        <div className='my-1'>
            <label
                className="text-gray-700 uppercase font-bold text-2xl"
                htmlFor="date"
            >Cambiar Fecha final de Membresia</label>

            <input
                id="date"
                type="date"
                className="border w-full p-2 my-1 placeholder-orange-300 rounded-md"
                placeholder={usuario.fechaFinal}
                onChange={e => setFechaFinal(e.target.value)}
            />
        </div>

        {msg && <Alerta alerta={alerta} />}

        <input
            type="submit"
            value={id ? 'Actualizar Usuario': 'Guardando...'}
            className='bg-orange-300 w-full p-3 uppercase font-bold text-black rounded-lg cursor-pointer hover:bg-orange-400 transition-colors my-5'
        />
      </form>      
    </>
  )
}

export default ProyectoAdmin