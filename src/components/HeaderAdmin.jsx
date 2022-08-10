import { Link } from 'react-router-dom'
import useProyectos from '../hooks/useProyectosAdmin'
import useAuth from '../hooks/useAuthAdmin'
import Busqueda from './Busqueda'

const Header = () => {

    const { handleBuscador } = useProyectos()
    const { cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        localStorage.removeItem('token')
    }


  return (
    <header className="px-4 py-5 bg-white border-b">
        <div className="md:flex md:justify-between">
            <h2 className="text-4xl font-black text-center mb-5 md:mb-0">
                Administración Club Gym La ceja
            </h2>

            <div className='flex flex-col md:flex-row items-center gap-4'>
                <button
                    type="button"
                    className='font-bold uppercase'
                    onClick={handleBuscador}
                >Buscar Usuarios</button>

                <button
                    type="button"
                    className='text-white text-sm bg-black p-3 rounded-md uppercase font-bold'
                    onClick={handleCerrarSesion}
                >Cerrar Sesión</button>

                <Busqueda />
            </div>
        </div>
    </header>
  )
}

export default Header