import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios'
import { useNavigate } from 'react-router-dom'
import useAuthAdmin from '../hooks/useAuthAdmin'
import io from 'socket.io-client'
import Alerta from '../components/Alerta'

const UsuariosContext = createContext()

const ProyectosProviderAdmin = ({children}) => {

  const [ usuarios, setUsuarios ] = useState([])
  const [ buscador, setBuscador ] = useState(false)  
  const [ usuario, setUsuario ] = useState({})  
  const [ cargando, setCargando] = useState(false)
  const [ alerta, setAlerta ] = useState({})

  const navigate = useNavigate();
  const { auth, setAuth } = useAuthAdmin()

  useEffect(() => {
    const obtenerUsuarios = async () => {      
      try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
        const { data } = await clienteAxios('/proyectos-Admin', config)
        setUsuarios(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerUsuarios()
  })

  const obtenerUsuario = async id => {
    setCargando(true)
    try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await clienteAxios(`/proyectos-Admin/${id}`, config )
        setUsuario(data)
        setAlerta({})
    } catch (error) {
        // navigate('/proyectos-admin')
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })
        setTimeout(() => {
            setAlerta({})
        }, 3000);
    } finally {
        setCargando(false)
    }
}

  const handleBuscador = () => {
    setBuscador(!buscador)
  }

  const cerrarSesionAuth = () => {
    setAuth({})
    setAlerta({})
  }

  const submitUsuario = async usuario => {
    if(usuario.id) {
        await editarUsuario(usuario) }
  }

  const editarUsuario = async usuario => {
    try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await clienteAxios.put(`/proyectos-Admin/${usuario.id}`, usuario, config)

        // Sincronizar el state
        const usuariosActualizados = usuarios.map(usuarioState => usuarioState._id === data._id ? data : usuarioState)
        setUsuarios(usuariosActualizados)

        setAlerta({
            msg: 'Proyecto Actualizado Correctamente',
            error: false
        })

        setTimeout(() => {
            setAlerta({})
            navigate(`/proyectos-admin/`)
        }, 3000);
    } catch (error) {
        console.log(error)
    }
  }

  const mostrarAlerta = alerta => {
    setAlerta(alerta)

    setTimeout(() => {
        setAlerta({})
    }, 2500 );
  }

  return (
    <UsuariosContext.Provider
    value={{
      usuarios,
      usuario,
      auth,
      setAuth,
      buscador,
      handleBuscador,
      mostrarAlerta,
      submitUsuario,
      obtenerUsuario,
      cargando,
      alerta,
      setAlerta,
      cerrarSesionAuth

    }}
    >{children}
    </UsuariosContext.Provider>
  )
}
export {
    ProyectosProviderAdmin
}

export default UsuariosContext