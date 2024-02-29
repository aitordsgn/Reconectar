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
        <meta name="author" content="Aitor Rey" />
        <meta name="keywords" content="Videojuegos para parejas, Videojuegos local, Videojuegos online, Videojuegos coop, Videojuegos multiplayer, Videojuegos 2 jugadores" />
        <meta name="description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
        <div className='BackgroundContainer'/>
        <Navbar></Navbar>
        <h1> Eventos</h1>
        </>
    )
}