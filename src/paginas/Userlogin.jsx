import { Link } from "react-router-dom"

const Userlogin = () => {
    return (
        <>
        <div className="justify-center lg:flex md:flex mt-20">
            <nav className="lg:flex lg:justify-between bg-white my-10 shadow rounded-lg px-10 py-5 mx-5">
                <Link
                className="font-black text-6xl capitalize"
                to="Login">
                Usuarios
                </Link>
            </nav>
            <nav className="lg:flex lg:justify-between bg-white my-10 shadow rounded-lg px-10 py-5 mx-5">
                <Link
                className="font-black text-6xl capitalize"
                to="login-Admin">
                Entrenadores
                </Link>
            </nav>
        </div>        
        </>      
    )
  }
  
  export default Userlogin