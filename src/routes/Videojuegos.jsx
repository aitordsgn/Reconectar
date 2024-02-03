import { ListadoJuegos } from "../GameList";
import Navbar from "../navbar";
import React, { useEffect } from 'react';

export default function Videojuegos () {
    useEffect(() => {
        document.title = 'Videojuegos'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    return (
        <>
        <Navbar></Navbar>
        <ListadoJuegos/>
        </>
    )
}