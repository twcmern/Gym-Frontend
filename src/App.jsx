import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import Userlogin from './paginas/Userlogin.jsx'
import RutaProtegida from './layouts/RutaProtegida'
import RutaProtegidaAdmin from './layouts/RutaProtegidaAdmin'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Proyectos from './paginas/Proyectos'

import LoginAdmin from './paginas/LoginAdmin.jsx'
import RegistrarAdmin from './paginas/RegistrarAdmin.jsx'
import OlvidePasswordAdmin from './paginas/OlvidePasswordAdmin.jsx'
import NuevoPasswordAdmin from './paginas/NuevoPasswordAdmin.jsx'
import ConfirmarCuentaAdmin from './paginas/ConfirmarCuentaAdmin.jsx'
import ProyectosAdmin from './paginas/ProyectosAdmin'
import ProyectoAdmin from './paginas/ProyectoAdmin'

import {AuthProvider} from './context/AuthProvider'
import {AuthProviderAdmin} from './context/AuthProviderAdmin'
import {ProyectosProvider} from './context/ProyectosProvider'
import {ProyectosProviderAdmin} from './context/ProyectosProviderAdmin'



function App() {


  return (
    <BrowserRouter>
      <AuthProviderAdmin>
        <AuthProvider>
          <ProyectosProviderAdmin>
            <ProyectosProvider>
              <Routes>
                      <Route path='/' element={<AuthLayout/>}>
                      <Route index element={<Userlogin/>}/>
                      <Route path='login' element={<Login/>}/>
                      <Route path='olvide-password' element={<OlvidePassword/>}/>
                      <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
                      <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>

                      <Route path='login-Admin' element={<LoginAdmin/>}/>
                      <Route path='registrar-Admin' element={<RegistrarAdmin/>}/>
                      <Route path='olvide-password-Admin' element={<OlvidePasswordAdmin/>}/>
                      <Route path='olvide-password-Admin/:token' element={<NuevoPasswordAdmin/>}/>          
                      <Route path='confirmar-Admin/:id' element={<ConfirmarCuentaAdmin/>}/>
                  </Route>

                  <Route path="/proyectos" element={<RutaProtegida />}>
                      <Route index element={<Proyectos />} />   
                  </Route>

                  <Route path="/proyectos-Admin" element={<RutaProtegidaAdmin />}>
                      <Route index element={<ProyectosAdmin />} />
                      <Route path="crear-usuario" element={<Registrar />} />
                      <Route path=":id" element={<ProyectoAdmin />} />
                  </Route>
              </Routes>
            </ProyectosProvider>
          </ProyectosProviderAdmin>
        </AuthProvider>
      </AuthProviderAdmin>
    </BrowserRouter>
  )
}

export default App
