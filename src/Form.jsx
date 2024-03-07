import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Formcss.module.css"
//import { useForm } from 'react-hook-form'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Toaster ,toast } from "sonner"

export function Formulario() {
    //<script src="Google Sheet.js"></script>
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz118MLc7C6qNn0A2quMNtSw9yJr_jwilYsf-dSSP3_dtcC_QHnrE_w4cikZuXWPOE1/exec'
    const form = document.forms['game-form']
    
    function handleSubmit(event) {
        event.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        //.then(response => alert("Thank you! your form is submitted successfully." ))
        .then(<Toaster/>,toast.success('Conseguido'))
        //.then(() => { window.location.reload(); })
        //.catch(error => console.error('Error!', error.message))
        .catch(error => toast.error('Error'))
      }

    return (
        <div className={styles.contenedor}>
            <h3 className={styles.titulo}>Tienes alguna recomendación de juego que no aparece aquí?</h3>
            <h4 className={styles.descripcion}>Dejamela aqui para que pueda añadirlo</h4>
            <form id="form" method="post" onSubmit={(event) => handleSubmit(event)} name="game-form" className={styles.form}>
                <label 
                htmlFor ="Juego"
                className={styles.explicacion}>Juego</label>
                <input
                    type="text" 
                    placeholder="Nombre del Juego"
                    id="Juego"
                    name="Juego"
                    required
                    minLength={2}
                    />
                
                {/*{errors.Juego?.type == 'required' && <span className={styles.errores}> El nombre del juego es requerido</span>}
                {errors.Juego?.type == 'minLength' && <span className={styles.errores}> El nombre del juego tiene que tener mas de 2 caracteres</span>}
                */}
                <section className={styles.contenedorBajo}>
                    <div className={styles.flexing}>
                        <label className={styles.select}>
                        <select name="Tipo" className={styles.selecter} required>
                                <option value="" disabled selected hidden>Tipo</option>
                                <option value="Cooperativo"> Cooperativo
                                </option>
                                <option value="VS"> VS
                                </option>
                                <option value="Party"> Party
                                </option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
                        </label>

                        <label className={styles.select}>
                            <select name="Plataforma" className={styles.selecter} required>
                                <option value="" disabled selected hidden>Plataforma</option>
                                <option value="Play Station"> Play Station
                                </option>
                                <option value="Switch"> Switch
                                </option>
                                <option value="Xbox"> Xbox
                                </option>
                                <option value="Steam"> Steam
                                </option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow}/>
                        </label>
                    </div>
                    <button type="submit" value="Submit" id="submit" className={styles.envio}>Enviar</button>
                </section>
                {/*
                {errors.Tipo && <span className={styles.errores}> Tienes que elegir un tipo de juego</span>}
                {errors.Plataforma && <span className={styles.errores}> Tienes que elegir una plataforma de juego</span>}
                */}
            </form>
            
            <div className={styles.desc}>
                <p className={styles.peticion}>Si eres desarrollador y crees que tu juego podría encajar en esta pagina no dudes en <a className={styles.key} href="mailto:reyortegaitor@gmail.com">mandarnos una key</a> para que lo probemos.</p>
                <inportant className={styles.inportant}>Puede que tu juego acabe entre en nuestros favoritos</inportant>
            </div>
            <Toaster/>
        </div>
        
    );
}
