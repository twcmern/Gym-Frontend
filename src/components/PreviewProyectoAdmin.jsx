import { Link } from 'react-router-dom'

const PreviewProyecto = ({usuarios}) => {


    const { nombre, email, _id, edad, sexo, cedula, telefono, membresia, vendedor, fechaFinal} = usuarios



    return (
        <div className='border-b sm:flex p-5 justify-between'>

            <div className='sm:flex items-center gap-20 text-lg'>
                <div>
                <p>
                    Nombre: <span className='text-gray-500 uppercase'>{nombre}</span>                    
                </p>
                <p>
                    Email: <span className='text-gray-500 uppercase'>{email}</span>
                </p>
                <p>
                    Edad: <span className='text-gray-500 uppercase'>{edad}</span>
                </p>
                <p>
                    Sexo: <span className='text-gray-500 uppercase'>{sexo}</span>
                </p>        
                </div>
                <div>
                <p>
                    Cedula: <span className='text-gray-500 uppercase'>{cedula}</span>
                </p>
                <p>
                    telefono: <span className='text-gray-500 uppercase'>{telefono}</span>
                </p>
                <p>
                    membresia: <span className='text-gray-500 uppercase'>{membresia}</span>
                </p>
                <p>
                    vendedor: <span className='text-gray-500 uppercase'>{vendedor}</span>
                </p>
                </div>
                <div>
                <p>
                    Fecha Final: <span className='text-gray-500 uppercase'>{fechaFinal?.split('T')[0]}</span>
                </p>
                </div>                        
            </div>
            
            <Link
                to={`${_id}`}
                className='text-gray-600 hover:text-gray-800 uppercase text-sm font-bold'
            >Ver usuario</Link>
        </div>
    )
}

export default PreviewProyecto