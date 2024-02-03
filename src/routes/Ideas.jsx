import React, { useEffect } from 'react';
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
        <Navbar></Navbar>
        <Generador_Ideas/>
        <span className={styles.footerBottomRextIdeas}> Creado por Aitor Rey Ortega</span>
        </>
    )
}