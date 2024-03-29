import { ListadoJuegos } from "../components/GameList.jsx";
import KonamiCode from "../components/KonamiCode.jsx";
import Navbar from "../components/navbar";
import { useEffect } from 'react';

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
        <meta name="author" content="Aitor Rey" />
        <meta name="keywords" content="Videojuegos para parejas, Videojuegos local, Videojuegos online, Videojuegos coop, Videojuegos multiplayer, Videojuegos 2 jugadores" />
        <meta name="description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
        <ListadoJuegos/>
        <KonamiCode/>
        </>
    )
}