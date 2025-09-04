import React, { useState } from "react";

export default function Navegacion({activo, setActivo}) {
  
  const items = [
    { label: "18 de Septiembre!!! 🎉🥟 ", href: "#contador" },
    { label: "Navidad!!! 🎉🎄 ", href: "#contadorNavidad" },
    { label: "Año Nuevo!!! 🎉🎆", href: "#" },
  ];
  
  return (
    <ul className="nav nav-tabs ">
      {items.map((item, idx) => (
        <li className="nav-item" key={idx}>
          <a
            className={`nav-link${activo === idx ? " active" : ""}`}
            href={item.href}
            onClick={e => {
              e.preventDefault();
              setActivo(idx);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
