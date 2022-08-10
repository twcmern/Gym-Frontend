import { useEffect } from 'react'
import useProyectos from "../hooks/useProyectosAdmin"
import PreviewProyecto from "../components/PreviewProyectoAdmin"
import Alerta from "../components/Alerta"

const ProyectosAdmin = () => {
  const { usuarios, alerta } = useProyectos()

  return (
    <>
        <h1 className="text-4xl font-black">Usuarios</h1>

        <div className="bg-white shadow mt-10 rounded-lg ">
            {usuarios.length ? 
              usuarios.map(usuarios => (
                  <PreviewProyecto 
                      key={usuarios._id}
                      usuarios={usuarios}
                  />
              ))
            : <p className=" text-center text-gray-600 uppercase  p-5">No hay Usuarios Aún</p>}
        </div>
    </>
  )
}

export default ProyectosAdmin