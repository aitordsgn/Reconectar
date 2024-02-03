import Navbar from "../navbar"
import React, { useEffect } from 'react';

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
        <h1> Eventos</h1>
        </>
    )
}