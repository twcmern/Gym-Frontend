import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const { setAuth } = useAuth();

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault();

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            });
            return
        }



        try {
            const { data } = await clienteAxios.post('/usuarios/login', { email, password})
            setAlerta({})
            localStorage.setItem('token', data.token)
            setAuth(data)
            navigate('/proyectos')
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
    <h1 className="font-black text-6xl capitalize">Inicia{' '}<span className="text-gray-400">Sesión</span>{' '}Usuario</h1>

    <nav className="lg:flex lg:justify-between shadow my-5">
        <Link
            className="font-bold text-lg capitalize"
            to="/">
            -{'  '}Volver a Inicio
        </Link>
    </nav>

    {msg && <Alerta alerta={alerta } />}
    
        <form 
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="email"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="password"
                >Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Password de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesión"
                className="bg-orange-100 mb-5 w-full rounded text-black font-bold text-2xl py-3 uppercase hover:cursor-pointer hover:bg-orange-200 transition-colors"
            />
            
        </form>

        <nav className="lg:flex lg:justify-between bg-white shadow rounded-lg p-5 text-sm font-bold uppercase">
            <Link 
                className='block text-center my-1 text-sm'
                to="/"
            >Inicio</Link>

            <Link 
                className='block text-center my-1 text-sm'
                to="/olvide-password"
            >Olvide Mi Password</Link>
        </nav>
    
    </>
  )
}

export default Login