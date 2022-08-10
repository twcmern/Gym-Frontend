import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const NuevoPassword = () => {

  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)

  const params = useParams()
  const { token } = params

  useEffect(() => {
      const comprobarToken = async () => {
          try {
              await clienteAxios(`/admin/olvide-password-Admin/${token}`)
              setTokenValido(true)
          } catch (error) {
              setAlerta({
                  msg: error.response.data.msg,
                  error: true
              })
          }
      }
      comprobarToken()
  }, [])

  const handleSubmit = async e => {
      e.preventDefault();

      if(password.length < 6) {
          setAlerta({
              msg: 'El Password debe ser minimo de 6 caracteres',
              error: true
          })
          return
      }

      try {
          const url = `/admin/olvide-password-Admin/${token}`

          const { data } = await clienteAxios.post(url, { password })
          setAlerta({
              msg: data.msg,
              error: false
          })
          setPasswordModificado(true)
      } catch (error) {
          setAlerta({
              msg: error.response.data.msg,
              error: true
          })
      }
  }

  const { msg } = alerta
      
  return (

  <>
    <h1 className="font-black text-6xl capitalize">Nuevo<span className="text-gray-400">{' '}Password</span></h1>
    
    {msg && <Alerta alerta={alerta} />}

    { tokenValido && (
        <form className="my-10 bg-white shadow rounded-lg p-5"
              onSubmit={handleSubmit}
              >      
              <div className="my-5">
                  <label 
                      className="uppercase block text-xl font-bold"
                      htmlFor="password"
                  >Nuevo Password</label>
                  <input
                  id="password"
                  type="password"
                  placeholder="Escribe Tu Nuevo Password"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  />
              </div>

              <input
                  type="submit"
                  value="Guardar Nuevo Password"
                  className="bg-orange-100 mb-5 w-full rounded text-black font-bold text-2xl py-3 uppercase hover:cursor-pointer hover:bg-orange-200 transition-colors"
              />
        </form>      
      )}

    {passwordModificado && (
                    <Link 
                        className='block text-center my-10 uppercase font-semibold text-2xl bg-white rounded-lg'
                        to="/login-Admin"
                    >Inicia Sesión</Link>
        )}
    </>
  )
}

export default NuevoPassword