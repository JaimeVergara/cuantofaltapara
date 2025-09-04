import React, { useState } from "react";

export default function Head({activo}) {

    const items = [
        { label: "18 de Septiembre!!! 🎉🥟 " },
        { label: "Navidad!!! 🎉🎄 " },
        { label: "Año Nuevo!!! 🎉🎆" },
      ];

    return (
        <header>    
            <h2>¿Cuanto Falta Para ...?</h2>
            <div className="margin-nav">
                <h1>{items[activo].label}</h1>
            </div>
        </header>
    );

}