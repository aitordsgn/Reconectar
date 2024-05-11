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
        document.title = 'Agenda de Citas - Reconectar'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    return (
        <>
        <Helmet>
          <title>Agenda de Citas - Reconectar</title>
          <meta name="author" content="Aitor Rey" />
          <meta name="keywords" content="Citas, Agenda de Citas, Calendario de Citas, Gestión de Citas, Planificación de Citas" />
          <meta name="description" content="Explora tu agenda de citas y visualiza tus citas agendadas en un calendario interactivo." />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.example.com/agenda-de-citas" />

          {/* Open Graph (OG) Tags */}
          <meta property="og:title" content="Agenda de Citas - Reconectar" />
          <meta property="og:description" content="Explora tu agenda de citas y visualiza tus citas agendadas en un calendario interactivo." />
          <meta property="og:image" content="https://www.example.com/og-image.jpg" />
          <meta property="og:url" content="https://www.example.com/agenda-de-citas" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Agenda de Citas - Reconectar" />
          <meta name="twitter:description" content="Explora tu agenda de citas y visualiza tus citas agendadas en un calendario interactivo." />
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