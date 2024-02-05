import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Formcss.module.css"
import {useForm} from'react-hook-form'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"


export function Formulario(){

    const {register, handleSubmit, formState:{errors}} = useForm()
    console.log(errors)

    const onSubmit = handleSubmit((data)=> {
        console.log(data)
    })
    return(
    <div className={styles.contenedor}>
        <h3 className={styles.titulo}>Tienes alguna recomendación de juego que no aparece aquí?</h3>
        <h4 className={styles.descripcion}>Dejamela aqui para que pueda añadirlo</h4>
        <form onSubmit = {onSubmit} className={styles.form}>
            <label htmlFor="Nombre Juego" className={styles.explicacion}>Juego</label>
            <input 
            type="text" placeholder="Nombre del Juego"
            {...register("Juego", {required: true})}
            />
            {
                errors.nombre && <span className={styles.errores}> Nombre es requerido</span>
            }

            <div className={styles.contenedorBajo}>
            <div className={styles.flexing}>
            <label className={styles.select} for="slct">
            <select {...register("Tipo", {required: true})} className={styles.slct} id="slct">
                <option value='' disabled selected hidden>
                Tipo
                </option>
                <option value ="coop"> Cooperativo
                </option>
                <option value ="VS"> VS
                </option>
                <option value ="party"> Party
                </option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
            </label>

            
            <label className={styles.select} for="slct">
            <select {...register("Plataforma", {required: true})} className={styles.slct} id="slct">
                <option value='' disabled selected hidden>
                Plataforma
                </option>
                <option value ="PS"> PlayStation
                </option>
                <option value ="SW"> Switch
                </option>
                <option value ="XB"> Xbox
                </option>
                <option value ="ST"> Steam
                </option>
            </select>
            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
            </label>
            </div>
            <button type="submit" className={styles.envio}> Enviar</button>
            </div>
        </form>
        <div className={styles.desc}>
        <p className={styles.peticion}>Si eres desarrollador y crees que tu juego podría encajar en esta pagina no dudes en <a className={styles.key}>mandarnos una key</a> para que lo probemos.</p> 
        <inportant className={styles.inportant}>Puede que tu juego acabe entre en nuestros favoritos</inportant>
        </div>
    </div>
    );
}