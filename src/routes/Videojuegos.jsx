import { ListadoJuegos } from "../components/GameList.jsx";
import KonamiCode from "../components/KonamiCode.jsx";
import Navbar from "../components/navbar";
import { useEffect } from 'react';

import { Helmet } from "react-helmet";

export default function Videojuegos () {
    useEffect(() => {
        document.title = 'Videojuegos - Reconectar'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    return (
        <>


        <Helmet>
          <title>Videojuegos para jugar en pareja - Reconectar </title>
          <meta name="author" content="Aitor Rey" />
          <meta name="keywords" content="Videojuegos, Juegos para parejas, Juegos en pareja, Co-op, Multiplayer, PC, Switch, PlayStation, Xbox" />
          <meta name="description" content="Descubre una selección de videojuegos ideales para disfrutar en pareja, ya sea en la misma pantalla o a distancia, disponibles para PC, Switch, PlayStation y Xbox." />

          {/* Canonical URL */}
          <link rel="canonical" href="https://aitordsgn.github.io/Reconectar/#/Videojuegos" />

          {/* Open Graph (OG) Tags */}
          <meta property="og:title" content="Videojuegos para jugar en pareja - Reconectar " />
          <meta property="og:description" content="Descubre una selección de videojuegos ideales para disfrutar en pareja, ya sea en la misma pantalla o a distancia, disponibles para PC, Switch, PlayStation y Xbox." />
          <meta property="og:image" content="https://github.com/aitordsgn/Reconectar/blob/1ea598f2da8f32459bb06f7d65963ddde715c2f0/public/Videogames.png" />
          <meta property="og:url" content="https://aitordsgn.github.io/Reconectar/#/Videojuegos" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Videojuegos para jugar en pareja - Reconectar " />
          <meta name="twitter:description" content="Descubre una selección de videojuegos ideales para disfrutar en pareja, ya sea en la misma pantalla o a distancia, disponibles para PC, Switch, PlayStation y Xbox." />
          <meta name="twitter:image" content="https://github.com/aitordsgn/Reconectar/blob/1ea598f2da8f32459bb06f7d65963ddde715c2f0/public/Videogames.png" />

      </Helmet>


        <Navbar></Navbar>
        
        <ListadoJuegos/>
        <KonamiCode/>
        </>
    )
}