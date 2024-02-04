import Navbar from "../navbar"
import React, { useEffect } from 'react';
import { Formulario } from "../Form";

export default function Eventos () {

    useEffect(() => {
        document.title = 'Eventos'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);

    return (
        <>
        <Navbar></Navbar>
        <Formulario/>
        <h1> Eventos</h1>
        </>
    )
}