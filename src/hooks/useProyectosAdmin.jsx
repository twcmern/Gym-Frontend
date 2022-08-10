import { useContext } from 'react'
import UsuariosContext from '../context/ProyectosProviderAdmin'

const useProyectos = () => {
    return useContext(UsuariosContext)
}

export default useProyectos