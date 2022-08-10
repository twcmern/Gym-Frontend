import { Link } from 'react-router-dom'
import useAuthAdmin from '../hooks/useAuthAdmin'

const Sidebar = () => {

  const { auth } = useAuthAdmin()

  return (
    <aside className='md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10 bg-gray-100' >
        <p className='text-xl font-bold'>Hola: {auth.nombre}</p>

        <Link
            to="crear-usuario"
            className='bg-black w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Nuevo Usuario</Link>
        
        <Link
            to="/proyectos-Admin"
            className='bg-black w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg'
        >Usuarios</Link>
    </aside>
  )
}

export default Sidebar