import { Outlet, Navigate } from 'react-router-dom'
import useAuthAdmin from '../hooks/useAuthAdmin'
import Header from '../components/HeaderAdmin'
import Sidebar from '../components/SidebarAdmin'

const RutaProtegidaAdmin = () => {

    const { auth, cargando } = useAuthAdmin();
    if(cargando) return 'Cargando...'
    return (
        <>
            {auth._id ? 
            (
                <div className=''>
                    <Header />

                    <div className='md:flex md:min-h-screen '>
                        <Sidebar />

                        <main className='p-10 flex-1 bg-gray-50'>
                            <Outlet />
                        </main>
                    </div>
                </div>
            ) : <Navigate to="/" />}
        </>
    )
}

export default RutaProtegidaAdmin