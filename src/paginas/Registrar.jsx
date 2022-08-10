import { useState } from 'react'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const Registrar = () => {
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ edad, setEdad ] = useState('')
    const [ sexo, setSexo ] = useState('')
    const [ cedula, setCedula ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ membresia, setMembresia ] = useState('')
    const [ vendedor, setVendedor ] = useState('')
    const [ fechaFinal, setFechaFinal ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, edad, password, sexo, repetirPassword, cedula, telefono, membresia, fechaFinal].includes('')) {
           setAlerta({
               msg: 'Todos los campos son obligatorios',
               error: true
           })
           return
        }

        if(password !== repetirPassword ) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }

        if(password.length < 6 ) {
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        try {
            const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, edad, password, sexo, repetirPassword, cedula, telefono, membresia, fechaFinal, vendedor})

            setAlerta({
                msg: data.msg,
                error: false
            })

            setNombre('')
            setEdad('')
            setSexo('')
            setCedula('')
            setTelefono('')
            setMembresia('')
            setVendedor('')
            setFechaFinal('')
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

    const { msg } = alerta

  return (
    <>
        <h1 className="font-black text-6xl capitalize">Registrar<span className="text-gray-400">{" "}Usuario</span></h1>

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
                    htmlFor="Edad"
                >Edad</label>
                <input
                id="Edad"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={edad}
                onChange={e => setEdad(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Sexo"
                >Sexo</label>
                <input
                id="Sexo"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={sexo}
                onChange={e => setSexo(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Cedula"
                >Cedula</label>
                <input
                id="Cedula"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={cedula}
                onChange={e => setCedula(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Telefono"
                >Telefono</label>
                <input
                id="Telefono"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Membresia"
                >Membresia</label>
                <input
                id="Membresia"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={membresia}
                onChange={e => setMembresia(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="Vendedor"
                >Vendedor</label>
                <input
                id="Vendedor"
                type="text"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={vendedor}
                onChange={e => setVendedor(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase block text-xl font-bold"
                    htmlFor="FechaFinal"
                >Fecha Final</label>
                <input
                id="FechaFinal"
                type="date"
                placeholder="Email de registro"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-100 text-black"
                value={fechaFinal}
                onChange={e => setFechaFinal(e.target.value)}
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

            {msg && <Alerta alerta={alerta} /> }
        </form>
    
    </>
  )
}

export default Registrar