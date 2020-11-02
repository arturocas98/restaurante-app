import React from 'react';

const ProductoAdd = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4" > Añadir producto </h1>

            <div className="flex justify-center mt-10  " >
                <div className="w-full max-w-3xl">
                    <form>
                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre"  >Nombre </label>
                            <input id="nombre" type="text" className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Nombre del producto"    
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio"  >Precio </label>
                            <input id="precio"  className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="number" min="0" placeholder="Precio del producto"    
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria"  >Categoría </label>
                            <select  className="shadow appearance-none 
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

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen"  >Imagen </label>
                            <input id="precio"  className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                type="file"   
                            />
                        </div>

                        <div className="mb-4" >
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion"  >Descripción </label>
                            <textarea id="descripcion" type="text" className="shadow appearance-none 
                                border rounded w-full py-2 px-3 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline h-40"
                                type="text" placeholder="Descripción del producto"    
                            ></textarea>
                        </div>
                        <input type="submit"  className="bg-green-800 hover:bg-green-900 w-full mt-5 
                            p-2 text-white uppercase font-bold" value="Guardar" />
                    </form>
                </div>

            </div>

        </>
     );
}
 
export default ProductoAdd;