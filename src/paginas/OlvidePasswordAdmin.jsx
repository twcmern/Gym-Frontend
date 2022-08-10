import { useState } from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'

const OlvidePassword = () => {

    const [email, setEmail] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if(email === '' || email.length < 6) {
            setAlerta({
                msg: 'El Email es obligatorio',
                error: true
            });
            return
        }

        try {
            const { data } = await clienteAxios.post(`/admin/olvide-password-admin`, { email })

            setAlerta({
                msg: data.msg,
                error: false
            })
            
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
    <h1 className="font-black text-6xl capitalize">Recupera{' '}<span className="text-gray-400">Tu Cuenta</span></h1>

    <nav className="lg:flex lg:justify-between shadow my-5">
        <Link
            className="font-bold text-lg capitalize"
            to="/">
            -{'  '}Volver a Inicio
        </Link>
    </nav>
    
    { msg && <Alerta alerta={alerta} />}

    <form 
        className="my-10 bg-white shadow rounded-lg p-5"
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
            placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
            value={email}
            onChange={ e => setEmail(e.target.value)}
            />
        </div>

        <input
            type="submit"
            value="Enviar Instrucciónes al correo"
            className="bg-orange-100 mb-5 w-full rounded text-black font-bold text-2xl py-3 uppercase hover:cursor-pointer hover:bg-orange-200 transition-colors"
        />
    </form>

    <nav className="lg:flex lg:justify-between bg-white shadow rounded-lg p-5 text-sm font-bold uppercase">
        <Link
            className="block text-center my-1 text-sm"
            to="/registrar-Admin">
            ¿No tienes una cuenta?, Registrate.
        </Link>
        <Link
            className="block text-center my-1 text-sm"
            to="/login-Admin">
            {' '}Inicia Sesión.
        </Link>
    </nav>
  </>
  )
}

export default OlvidePassword