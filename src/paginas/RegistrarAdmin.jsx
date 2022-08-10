import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {

    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()

        if([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({
                msg: 'todos los campos son obligatorios',
                error: true
            })
            return
        }

        if(password !== repetirPassword) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6) {
            setAlerta({
                msg: 'El password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API

        try {
            const { data } = await clienteAxios.post(`/admin/registar-admin`, {nombre,email, password})

            setAlerta({
                msg: data.msg,
                error: false
            })

            setNombre('')
            setEmail('')
            setPassword('')
            setRepetirPassword('')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }

    const { msg } = alerta

    return (
    <>
        <h1 className="font-black text-6xl capitalize">Registra<span className="text-gray-400">te</span></h1>

        {msg && <Alerta alerta={alerta} /> }

        <nav className="lg:flex lg:justify-between shadow my-5">
        <Link
            className="font-bold text-lg capitalize"
            to="/">
            -{'  '}Volver a Inicio
        </Link>
        </nav>

        <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg p-5"
        >
        <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Nombre"
                >Nombre</label>
                <input
                id="Nombre"
                type="text"
                placeholder="Tu Nombre Aquí"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                />
            </div>
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
                onChange={e => setEmail(e.target.value)}
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
                placeholder="Password de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="password2"
                >Repetir Password</label>
                <input
                id="password2"
                type="password"
                placeholder="Repetir Password de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={repetirPassword}
                onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>

            <input
                type="submit"
                value="Crear Cuenta"
                className="bg-orange-100 mb-5 w-full rounded text-black font-bold text-2xl py-3 uppercase hover:cursor-pointer hover:bg-orange-200 transition-colors"
            />
        </form>

        <nav className="lg:flex lg:justify-between bg-white shadow rounded-lg p-5 text-sm font-bold uppercase">
            <Link
                className="block text-center my-1 text-sm"
                to="/login-Admin">
                ¿Ya tienes una cuenta? Inicia Sesión.
            </Link>
            <Link
                className="block text-center my-1 text-sm"
                to="/olvide-password-Admin">
                {' '}Olvide Mi Password.
            </Link>
        </nav>
    </>
    )
  }
  
  export default Registrar