import { BadgeButton } from './Badge.jsx'
import styles from './ideas.module.css'
import Navbar from './navbar'

export function Generador_Ideas (){

    return(
        <>
        <div className={styles.BackgroundContainer }>
            <div className={styles.categoriesContainer }>
                    <BadgeButton category="DIY"/>
                    <BadgeButton category="Cocina"/>
                    <BadgeButton category="Activo"/>
                    <BadgeButton category="Fuera de Casa"/>
                    <BadgeButton category="En Casa"/>
                    <BadgeButton category="Planificada"/>
                    <BadgeButton category="Especial"/>
                    <BadgeButton category="Naturaleza"/>
                    <BadgeButton category="DIY"/>
            </div>
            <div className={styles.containerIdeas }>
                <h1 className={styles.DateIdea }>Presiona el boton para generar una idea para una cita</h1>
                <button className={styles.generateIdeaButton }>Generar Idea</button>
            </div>
        </div>
        </>
    )
}
