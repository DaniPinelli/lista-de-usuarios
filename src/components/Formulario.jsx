import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import NuevoCliente from './../paginas/NuevoCliente';
import Alerta from './Alerta';

const Formulario = () => {

    const NuevoClienteSchema = Yup.object().shape({

        nombre: Yup.string().required('El nombre es requerido'),
        empresa: Yup.string().required('El nombre de la empresa es requerido'),
        telefono: Yup.number().typeError('Debe ser un número').required('El telefono es requerido'),
        email: '',
        notas: ''
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div className="bg-slate-300 mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto" >
            <h2 className="text-blue-900 font-bold text-xl uppercase text-center" >Agregar Cliente</h2>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    telefono: '',
                    email: '',
                    notas: ''
                }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
                validationSchema={NuevoClienteSchema}
            >
                {({ errors, touched }) => {
                    return (
                        <Form className="mt-10"
                        >
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="nombre"
                                >Nombre: </label>
                                <Field
                                    id="nombre"
                                    type="text"
                                    className="mt-2 block w-full p3 bg-gray-50 "
                                    placeholder="Nombre del cliente"
                                    name="nombre"
                                />

                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null}

                            </div>
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="empresa"
                                >Empresa: </label>
                                <Field
                                    id="empresa"
                                    type="text"
                                    className="mt-2 block w-full p3 bg-gray-50 "
                                    placeholder="Nombre de la empresa"
                                    name="empresa"
                                />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="email"
                                >Email: </label>
                                <Field
                                    id="email"
                                    type="text"
                                    className="mt-2 block w-full p3 bg-gray-50 "
                                    placeholder="Email del cliente"
                                    name="email"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="telefono"
                                >Teléfono: </label>
                                <Field
                                    id="telefono"
                                    type="tel"
                                    className="mt-2 block w-full p3 bg-gray-50 "
                                    placeholder="Teléfono del cliente"
                                    name="telefono"
                                />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null}
                            </div>
                            <div className="mb-4">
                                <label
                                    className="text-gray-800"
                                    htmlFor="text"
                                >Notas: </label>
                                <Field
                                    as="textarea"
                                    id="notas"
                                    type="tel"
                                    className="mt-2 block w-full p3 bg-gray-50 h-40"
                                    placeholder="Notas"
                                    name="notas"
                                />
                            </div>

                            <input
                                type="submit"
                                value="Agregar"
                                className="bg-blue-800 hover:bg-blue-500 text-white font-bold w-full uppercase text-lg rounded-md "
                            />

                        </Form>
                    )
                }}
            </Formik>

        </div>
    )
}

export default Formulario