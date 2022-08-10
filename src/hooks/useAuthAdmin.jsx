import { useContext } from 'react'
import AuthContextAdmin from '../context/AuthProviderAdmin'

const useAuthAdmin = () => {
    return useContext(AuthContextAdmin)
}

export default useAuthAdmin;