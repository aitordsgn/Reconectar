import Navbar from "../components/navbar.jsx"
import { useEffect } from 'react';
import KonamiCode from "../components/KonamiCode.jsx";
import CalendarioEventos from "../components/Calendar.jsx";
import ListadoEventos from "../components/ListadoEventos.jsx";
import styles from '../styles/Event.module.css';
import { Helmet } from "react-helmet";


export default function Eventos () {
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
          <CalendarioEventos className={styles.child} eventos={eventos}></CalendarioEventos>
          <ListadoEventos className={styles.child} eventos={eventos}></ListadoEventos>
        </div>
        <KonamiCode/>
        </>
    )
}
const eventos = [
  {
    id: 1,
    fecha: "2024-07-10",
    titulo: "Una tarde jugando al Twister",
    tipo: "En Casa"
  },
  {
    id: 2,
    fecha: "2024-07-15",
    titulo: "Cocinar sushi, desde el arroz hasta el alga",
    tipo: "Cocina"
  },
  {
    id: 3,
    fecha: "2024-08-05",
    titulo: "Pintar un cuadro juntos",
    tipo: "DIY"
  },
  {
    id: 4,
    fecha: "2024-08-20",
    titulo: "Competición de cocina. A ver quien hace un mejor plato.",
    tipo: "Cocina"
  },
  {
    id: 5,
    fecha: "2024-09-10",
    titulo: "Teñir Ropa (Camisetas, Pantalones, Calcetines)",
    tipo: "DIY"
  },
  {
    id: 6,
    fecha: "2024-09-15",
    titulo: "Aprender a hacer malabares",
    tipo: "Activo"
  },
  {
    id: 7,
    fecha: "2024-10-05",
    titulo: "Un partido de Tenis",
    tipo: "Activo"
  },
  {
    id: 8,
    fecha: "2024-10-20",
    titulo: "Jugar al Ping Pong",
    tipo: "Activo"
  },
  {
    id: 9,
    fecha: "2024-11-10",
    titulo: "Ir a ver una obra de teatro",
    tipo: "Planificada"
  },
  {
    id: 10,
    fecha: "2024-11-15",
    titulo: "Escape Room",
    tipo: "Planificada"
  },
  {
    id: 11,
    fecha: "2024-12-05",
    titulo: "Competicion Mario Kart",
    tipo: "En Casa"
  },
  {
    id: 12,
    fecha: "2024-12-20",
    titulo: "Ir a un concierto",
    tipo: "Especial"
  },
  {
    id: 13,
    fecha: "2025-01-10",
    titulo: "Ruta de montaña en bici",
    tipo: "Naturaleza"
  },
  {
    id: 14,
    fecha: "2025-01-15",
    titulo: "Cocinar Noodles al estilo oriental tradicional",
    tipo: "Cocina"
  },
  {
    id: 15,
    fecha: "2025-02-05",
    titulo: "Crear vuestra familia imaginaria en Los Sims",
    tipo: "En Casa"
  },
  {
    id: 16,
    fecha: "2025-02-20",
    titulo: "Servidor de Minecraft juntos",
    tipo: "En Casa"
  },
  {
    id: 17,
    fecha: "2025-03-10",
    titulo: "Crear la casa de ensueño en Los Sims",
    tipo: "En Casa"
  },
  {
    id: 18,
    fecha: "2025-03-15",
    titulo: "Comprar y Jugar con un Quimicefa",
    tipo: "DIY"
  }
];

