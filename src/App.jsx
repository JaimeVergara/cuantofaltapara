import React, { useState } from 'react';
import './App.css';
import Head from './components/Head';
import Contador from './components/Contador';
import Navegacion from './components/Navegacion';

function App() {

  const [activo, setActivo] = useState(0); // primer tab activo por defecto

  // Solo se indica mes y día: el año se calcula solo (este año o el próximo)
  const componentes = [
    <Contador key="contador" id="contador" mes={9} dia={18} finalMensaje="🎉 ¡Feliz 18 de Septiembre! 🥳" />,
    <Contador key="contadorNavidad" id="contadorNavidad" mes={12} dia={25} finalMensaje="🎉 ¡Feliz Navidad! 🎄" />,
    <Contador key="contadorAnoNuevo" id="contadorAnoNuevo" mes={1} dia={1} finalMensaje="🎉 ¡Feliz Año Nuevo! 🎆" />
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
