import { useNavigate } from 'react-router-dom'

const Cliente = ({ cliente, handleEliminar }) => {

    const navigate = useNavigate()

    const { nombre, empresa, email, telefono, notas, id } = cliente

    return (
        <tr className="border-b hover:bg-gray-50 " >
            <td className="border px-3">{nombre}</td>
            <td className="border px-3">
                <p><span className="text-gray-800 uppercase" >Email:</span> {email} </p>
                <p><span className="text-gray-800 uppercase" >Teléfono:</span> {telefono} </p>
            </td>
            <td className="border px-3">{empresa}</td>
            <td className="border px-3">
                <button
                    type="button"
                    className="bg-green-600 hover:bg-green-900 block p-2 w-full mt-1 uppercase rounded text-white text-xs font-bold"
                    onClick={() => navigate(`/clientes/${id}`)}
                >Detalle</button>
                <button
                    type="button"
                    className="bg-orange-600 hover:bg-orange-900 block p-2 w-full mt-1 uppercase rounded text-white text-xs font-bold"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>
                <button
                    type="button"
                    className="bg-red-600 hover:bg-red-900 block p-2 w-full mt-1 uppercase rounded text-white text-xs font-bold"
                    onClick={() => handleEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente