import React from 'react';
import { Routes,Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';

function App() {
  return (
    // <h1 className="text-3xl bg-red-300 font-light">Hola mundo</h1>
    <div>
      <Routes>
        <Route  path="/" element={ <Ordenes/> } />
      </Routes>
    </div>
  );
}

export default App;
