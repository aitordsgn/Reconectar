import { useEffect } from 'react';
import {Generador_Ideas} from "../GeneradorIdeas.jsx"
import Navbar from "../navbar"
import styles from '../ideas.module.css';

export default function Ideas () {
    useEffect(() => {
        document.title = 'Ideas'; // Establece el título deseado
        return () => {
          // Código de limpieza si es necesario
        };
      }, []);
    
    return (
        <>
        <meta name="author" content="Aitor Rey" />
        <meta name="keywords" content="Ideas para citas, Citas románticas, Citas originales, Citas divertidas, Citas económicas, Citas sorpresa" />
        <meta name="description" content="Encuentra la cita perfecta para tu pareja con nuestro generador de ideas, con opciones para todos los gustos y presupuestos." />
        <Navbar></Navbar>
        <Generador_Ideas/>
        <span className={styles.footerBottomRextIdeas}> Creado por Aitor Rey Ortega</span>
        </>
    )
}