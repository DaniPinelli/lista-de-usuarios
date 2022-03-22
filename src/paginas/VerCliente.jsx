import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const verCliente = () => {

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(false)
        }
        obtenerClienteAPI()
    }, []);

    return (


        Object.keys(cliente).length === 0 ? <p>No hay clientes</p> : (

            <div>

                {cargando ? 'Cargando datos' : (

                    <>
                        <h2 className="text-4xl text-gray-100" >
                            Información del Cliente</h2>
                        <p className="text-3xl text-gray-100 mt-8" >
                            <span className="uppercase font-bold" >Cliente: </span>
                            {cliente.nombre} </p>
                        {cliente.email && (
                            <p className="text-2xl text-gray-100 mt-3" >
                                <span className="uppercase font-bold" >Email: </span>
                                {cliente.email} </p>
                        )}
                        <p className="text-2xl text-gray-100 mt-3" >
                            <span className="uppercase font-bold" >Teléfono: </span>
                            {cliente.telefono} </p>
                        <p className="text-2xl text-gray-100 mt-3" >
                            <span className="uppercase font-bold" >Empresa: </span>
                            {cliente.empresa} </p>
                        {cliente.notas && (
                            <p className="text-2xl text-gray-100 mt-3" >
                                <span className="uppercase font-bold" >Notas: </span>
                                {cliente.notas} </p>
                        )}
                    </>
                )}
            </div>
        )
    )
}

export default verCliente