import useProyectos from "./useProyectosAdmin";
import useAuth from "./useAuthAdmin";

const useAdminAdmin = () => {
    const {usuario } = useProyectos()
    const { auth } = useAuth()
}

export default useAdminAdmin