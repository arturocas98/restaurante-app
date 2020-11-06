import { FastField, useFormik, yupToFormErrors } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const ProductoAdd = () => {
    // validación y leer datos del formulario
    const form = useFormik({
        initialValues: {
            nombre: '',
            precio: '',
            categoria: '',
            imagen: '',
            descripcion: '',
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .min(3, 'El producto debe tener al menos 3 caracteres')
                .required('El nombre del producto es obligatorio'),
            precio: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('El precio del producto es obligatorio'),
            categoria: Yup.string()
                .required('La categoría del producto es obligatorio'),
            descripcion: Yup.string()
                .min(5, 'La descripción del producto debe ser mas larga')
                .required('La descripción del producto es obligatoria'),
        }),

        onSubmit: datos => {
            console.log(datos);
        }

    });
    return (
        <>
            <h1 className="text-3xl font-light mb-4" > Añadir productos </h1>

            <div className="flex justify-center mt-10  " >
                <div className="w-full max-w-3xl">
                    <form onSubmit={form.handleSubmit}>
                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre"  >Nombre </label>
                            <input value={form.values.nombre} onChange={form.handleChange} onBlur={form.handleBlur} id="nombre" type="text" className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Nombre del producto"
                            />
                        </div>
                        { form.touched.nombre && form.errors.nombre?(
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert" >
                                <p className="font-bold" >Hubo un error: </p>
                                <p>{form.errors.nombre} </p>
                            </div>
                        ):null }

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio"  >Precio </label>
                            <input value={form.values.precio} onChange={form.handleChange}  onBlur={form.handleBlur} id="precio" className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="number" min="0" placeholder="Precio del producto"
                            />
                        </div>
                        { form.touched.precio && form.errors.precio?(
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert"  >
                                <p className="font-bold" >Hubo un error: </p>
                                <p>{form.errors.precio} </p>
                            </div>
                        ):null }

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria"  >Categoría </label>
                            <select value={form.values.categoria} onChange={form.handleChange}  onBlur={form.handleBlur} className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                name="categoria" id="categoria">
                                <option value=""> --Seleccione</option>
                                <option value="alimentos">Alimentos</option>
                                <option value="papeleria">Papelería</option>
                                <option value="carnes">Carnes</option>
                                <option value="frutas">Frutas</option>
                                <option value="bebidas">Bebidas</option>

                            </select>
                        </div>
                        
                        { form.touched.categoria && form.errors.categoria?(
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert" >
                                <p className="font-bold" >Hubo un error: </p>
                                <p>{form.errors.categoria} </p>
                            </div>
                        ):null }

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen"  >Imagen </label>
                            <input id="precio" value={form.values.imagen} onChange={form.handleChange} className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="file"
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion"  >Descripción </label>
                            <textarea id="descripcion" value={form.values.descripcion} onBlur={form.handleBlur} onChange={form.handleChange} type="text" className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline h-40"
                                type="text" placeholder="Descripción del producto"
                            ></textarea>
                        </div>
                        
                        { form.touched.descripcion && form.errors.descripcion?(
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert" >
                                <p className="font-bold" >Hubo un error: </p>
                                <p>{form.errors.descripcion} </p>
                            </div>
                        ):null }

                        <input type="submit" className="bg-green-600 hover:bg-green-700 w-full mt-5 
                            p-2 text-white uppercase font-bold" value="Guardar" />
                    </form>
                </div>

            </div>

        </>
    );
}

export default ProductoAdd;