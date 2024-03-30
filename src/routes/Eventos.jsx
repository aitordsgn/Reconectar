import Navbar from "../components/navbar.jsx"
import { useEffect } from 'react';
import KonamiCode from "../components/KonamiCode.jsx";
import { CalendarEdit } from "../components/Calendar.jsx";
import ListadoEventos from "../components/ListadoEventos.jsx";
import styles from '../styles/Event.module.css';

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
        <meta name="author" content="Aitor Rey" />
        <meta name="keywords" content="Videojuegos para parejas, Videojuegos local, Videojuegos online, Videojuegos coop, Videojuegos multiplayer, Videojuegos 2 jugadores" />
        <meta name="description" content="Descubre una selección de juegos para disfrutar en pareja, tanto en la misma pantalla como a distancia." />
        <div className='BackgroundContainer'/>
        <Navbar></Navbar>
        {/* Create a flexbox grid to achieve two elements in a row. 
        In the first element, it will be the Calendaredit, the second element will be the event list */}
        <div className={styles.flexboxgrid}>
          <CalendarEdit className={styles.Calendar}></CalendarEdit>
          <ListadoEventos className={styles.List}></ListadoEventos>
        </div>
        <KonamiCode/>
        </>
    )
}