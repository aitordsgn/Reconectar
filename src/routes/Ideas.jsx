import { useEffect } from 'react';
import {Generador_Ideas} from "../components/GeneradorIdeas.jsx"
import KonamiCode from "../components/KonamiCode.jsx";

import Navbar from "../components/navbar.jsx"
import styles from '../styles/ideas.module.css';

import { Helmet } from "react-helmet";

export default function Ideas () {
    useEffect(() => {
        document.title = 'Ideas'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    
    return (
        <>
        <Helmet>
          <title>Eventos</title>
          <meta name="author" content="Aitor Rey" />
          <meta name="keywords" content="Ideas para citas, Citas románticas, Citas originales, Citas divertidas, Citas económicas, Citas sorpresa" />
          <meta name="description" content="Encuentra la cita perfecta para tu pareja con nuestro generador de ideas, con opciones para todos los gustos y presupuestos." />

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
        <Generador_Ideas/>
        <span className={styles.footerBottomRextIdeas}> Creado por Aitor Rey Ortega</span>
        <KonamiCode/>

        </>
    )
}