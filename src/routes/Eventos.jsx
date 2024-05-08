import Navbar from "../components/navbar.jsx"
import { useEffect } from 'react';
import KonamiCode from "../components/KonamiCode.jsx";
import { CalendarEdit } from "../components/Calendar.jsx";
import ListadoEventos from "../components/ListadoEventos.jsx";
import styles from '../styles/Event.module.css';
import { Helmet } from "react-helmet";


export default function Eventos () {
  const eventDates = [5, 10, 15]; // Dates of events

    useEffect(() => {
        document.title = 'Eventos'; // Establece el título deseado
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
        <div className='BackgroundContainer'/>
        <Navbar></Navbar>
        {/* Create a flexbox grid to achieve two elements in a row. 
        In the first element, it will be the Calendaredit, the second element will be the event list */}
        <div className={styles.parent}>
          <CalendarEdit className={styles.child}></CalendarEdit>
          <ListadoEventos className={styles.child}></ListadoEventos>
        </div>
        <KonamiCode/>
        </>
    )
}