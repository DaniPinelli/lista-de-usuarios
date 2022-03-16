import React from 'react'

const Alerta = ({ children }) => {
    return (
        <div className="text-red-600 text-center ">
            {children}
        </div>
    )
}

export default Alerta