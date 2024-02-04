import styles from "./Form.module.css"
import {useForm} from'react-hook-form'


export function Formulario(){
    return(
    <div className={styles.contenedor}>
        <form action="">
            <label htmlFor="Nombre Juego" className={styles.explicacion}>Juego</label>
            <input type="text"/>
            
            <select>
                <option value ="coop"> Cooperativo
                </option>
                <option value ="VS"> VS
                </option>
                <option value ="party"> Party
                </option>
            </select>

            <select>
                <option value ="PS"> PlayStation
                </option>
                <option value ="SW"> Switch
                </option>
                <option value ="XB"> Xbox
                </option>
                <option value ="ST"> Steam
                </option>
            </select>

            <button> Enviar</button>
        </form>
    </div>
    )
}