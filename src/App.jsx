import React, { useState } from 'react';
import './App.css';
import Head from './components/head';
import Contador from './components/Contador';
import Navegacion from './components/Navegacion';
import ContadorNavidad from './components/ContadorNavidad';
import ContadorAnoNuevo from './components/ContadorAnoNuevo';

function App() {

  const [activo, setActivo] = useState(0); // primer tab activo por defecto

  const componentes = [
    <Contador key="contador" />,
    <ContadorNavidad key="contadorNavidad" />,
    <ContadorAnoNuevo key="contadorAnoNuevo" />
  ];

  return (
   <section>
      <Navegacion activo={activo} setActivo={setActivo}/>
      <div className="margin-app">
        <Head activo={activo}/>
        {componentes[activo]}
      </div>
   </section>
  )
}

export default App
