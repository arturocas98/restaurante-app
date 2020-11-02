import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <>
            <h1 className="text-3xl font-light mb-4" > Menu </h1>
            <Link to="/producto-add"  className=" bg-green-700 hover:bg-green-400,
                inline-block mb-5 p-2 text-white uppercase font-bold" >
                Agregar pedido
            </Link>
        </>
     );
}
 
export default Menu;