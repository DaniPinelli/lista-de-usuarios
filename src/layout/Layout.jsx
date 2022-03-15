import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const location = useLocation()
    const urlActual = location.pathname

    console.log(location)

    return (
        <div className="md:flex md:min-h-screen bg-slate-500">

            <div className="md:w-1/4 bg-blue-900 px-5 py-10 ">
                <h2 className="text-white text-4xl font-black text-center"
                >CRM - Clientes</h2>
                <nav className="mt-10" >
                    <Link
                        to="/clientes" className={`${urlActual === '/clientes' ? 'text-purple-300' : 'text-white'} block mt-2 text-2xl hover:text-blue-200`}>
                        Inicio
                    </Link>
                    <Link
                        to="/clientes/nuevo" className={`${urlActual === '/clientes/nuevo' ? 'text-purple-300' : 'text-white'} block mt-2 text-2xl hover:text-blue-200`}>
                        Nuevo Cliente
                    </Link>
                    <Link
                        to="/clientes/editar/:id" className={`${urlActual === '/clientes/editar/:id' ? 'text-purple-300' : 'text-white'} block mt-2 text-2xl hover:text-blue-200`}>
                        Editar Cliente
                    </Link>

                </nav>
            </div>
            <div className="md:w-3/4 md:h-screen p-10 overflow-scroll">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout










