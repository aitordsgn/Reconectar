import { ListadoJuegos } from "../components/GameList.jsx";
import KonamiCode from "../components/KonamiCode.jsx";
import Navbar from "../components/navbar";
import { useEffect } from 'react';

import { Helmet } from "react-helmet";

export default function Videojuegos () {
    useEffect(() => {
        document.title = 'Videojuegos'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    return (
        <>


        <Helmet>
          <title>Eventos</title>
          <meta name="author" content="Aitor Rey" />
          <meta name="keywords" content="Videojuegos para parejas, Videojuegos local, Videojuegos online, Videojuegos coop, Videojuegos multiplayer, Videojuegos 2 jugadores" />
          <meta name="description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
          {/* Canonical URL */}
          <link rel="canonical" href="https://www.example.com/eventos" />

          {/* Open Graph (OG) Tags */}
          <meta property="og:title" content="Eventos" />
          <meta property="og:description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
          <meta property="og:image" content="https://www.example.com/og-image.jpg" />
          <meta property="og:url" content="https://www.example.com/eventos" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Eventos" />
          <meta name="twitter:description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
          <meta name="twitter:image" content="https://www.example.com/og-image.jpg" />
      </Helmet>


        <Navbar></Navbar>
        
        <ListadoJuegos/>
        <KonamiCode/>
        </>
    )
}