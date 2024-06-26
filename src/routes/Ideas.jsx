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
          <title>Ideas - Reconectar</title>
          <meta name="author" content="Aitor Rey" />
          <meta name="keywords" content="Ideas para citas, Citas románticas, Citas originales, Citas divertidas, Citas económicas, Citas sorpresa" />
          <meta name="description" content="Encuentra la cita perfecta para tu pareja con nuestro generador de ideas, con opciones para todos los gustos y presupuestos" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://aitordsgn.github.io/Reconectar/" />

          {/* Open Graph (OG) Tags */}
          <meta property="og:title" content="Ideas - Reconectar" />
          <meta property="og:description" content="Encuentra la cita perfecta para tu pareja con nuestro generador de ideas, con opciones para todos los gustos y presupuestos." />
          <meta property="og:image" content="https://github.com/aitordsgn/Reconectar/blob/1ea598f2da8f32459bb06f7d65963ddde715c2f0/public/Ideas.png" />
          <meta property="og:url" content="https://aitordsgn.github.io/Reconectar/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ideas - Reconectar" />
          <meta name="twitter:description" content="Encuentra la cita perfecta para tu pareja con nuestro generador de ideas, con opciones para todos los gustos y presupuestos." />
          <meta name="twitter:image" content="https://github.com/aitordsgn/Reconectar/blob/1ea598f2da8f32459bb06f7d65963ddde715c2f0/public/Ideas.png" />
      </Helmet>
       
        <Navbar></Navbar>
        <Generador_Ideas/>
        <span className={styles.footerBottomRextIdeas}> Creado por Aitor Rey Ortega</span>
        <KonamiCode/>

        </>
    )
}