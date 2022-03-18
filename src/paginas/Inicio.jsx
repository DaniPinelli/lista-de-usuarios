import { useState, useEffect } from 'react'
import Cliente from './../components/Cliente';

const Inicio = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {

        const obtenerClientesAPI = async () => {
            try {
                const url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }

        }

        obtenerClientesAPI()
    }, [])

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900 " >Clientes</h1>
            <p className="mt-3" >Administrar Clientes</p>

            <table className="w-full mt-5 table-auto shadow bg-white" >
                <thead className='bg-blue-800 text-white' >
                    <tr>
                        <th className="px-4 py-2 font-bold">Nombre</th>
                        <th className="px-4 py-2 font-bold">Contacto</th>
                        <th className="px-4 py-2 font-bold">Empresa</th>
                        <th className="px-4 py-2 font-bold">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map(cliente => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                        />
                    ))}
                </tbody>

            </table>
        </>
    )
}

export default Inicio