import {Generador_Ideas} from "../GeneradorIdeas.jsx"
import Navbar from "../navbar"
import styles from '../ideas.module.css';

export default function Ideas () {
    return (
        <>
        <Navbar></Navbar>
        <Generador_Ideas/>
        <span className={styles.footerBottomRextIdeas}> Creado por Aitor Rey Ortega</span>
        </>
    )
}