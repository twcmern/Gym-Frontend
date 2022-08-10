import { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useProyectos from '../hooks/useProyectosAdmin'

const Proyectos = () => {

  const { auth } = useAuth()
  const id = auth._id
  
  const { obtenerUsuario } = useProyectos()

  useEffect(() => {
    obtenerUsuario(id)
    try {
      if(!auth.edad){
        location.reload()
      }
    } catch (error) {
      console.log(Error)
    }
    
  }, [auth])
  
  

  return (
    <>
      <div className=''>
        <div className='flex justify-center font-black text-4xl bg-gray-50 rounded-md my-5 border'>
          {auth.nombre}
        </div>
        <div className='bg-white border-black border rounded-lg p-2'>
        <div className='font-black text-4xl my-2'>
          Cedúla: {auth.cedula}
        </div>
        <div className='font-black text-4xl my-2'>
          Edad: {auth.edad}
        </div>
        <div className='font-black text-4xl my-2'>
          Email: {auth.email}
        </div>
        <div className='font-black text-4xl my-2'>
          Membresia: {auth.membresia}
        </div>
        <div className='font-black text-4xl my-2'>
          Sexo: {auth.sexo}
        </div>
        <div className='font-black text-4xl my-2'>
          Telefono: {auth.telefono}
        </div>
        <div className='font-black text-4xl my-2'>
          Vendedor: {auth.vendedor}
        </div>
        <div className='font-black text-4xl my-2 mb-60'>
          Fecha Final: {auth.fechaFinal?.split('T')[0]}
        </div>
        </div>
      </div>       
    </>
  )
}



export default Proyectos