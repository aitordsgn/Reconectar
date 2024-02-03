import { BadgeButton } from './Badge.jsx'
import styles from './ideas.module.css'
import Navbar from './navbar.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb,faCalendar} from '@fortawesome/free-solid-svg-icons'

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
            </div>
            <div className={styles.containerIdeas }>
<<<<<<< HEAD
                <h1 className={styles.DateIdea }>Presiona el botón para generar una idea para una cita</h1>
=======
                <h1 className={styles.DateIdea }>Presiona el boton para generar una idea para una cita</h1>
>>>>>>> 31d2a5ec8c144d235387002f5d54414cf41c07e7
                <div class={styles.buttonContainer}>
                <button className={styles.generateIdeaButton }>
                <FontAwesomeIcon icon={faLightbulb}  class={styles.CalendarIcon}/>
                <span class={styles.lable}>Generar Idea</span> 
                </button>
                <button className={styles.Calendario }>
                    <FontAwesomeIcon icon={faCalendar} class={styles.CalendarIcon}/>
                <span class={styles.lable}>Añadir Evento</span>
               </button>
               </div>
            </div>
        </div>
        </>
    )
}
