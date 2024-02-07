import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./Formcss.module.css"
import { useForm } from 'react-hook-form'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycby4K-QLEDD540pv4nq4Z8wkVBPPMFjLeLw6_7zjjnSv/dev', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                console.log('Datos enviados correctamente');
            } else {
                console.error('Error al enviar datos');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={styles.contenedor}>
            <h3 className={styles.titulo}>Tienes alguna recomendación de juego que no aparece aquí?</h3>
            <h4 className={styles.descripcion}>Dejamela aqui para que pueda añadirlo</h4>
            <form id="form" onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="Nombre Juego" className={styles.explicacion}>Juego</label>
                <input
                    type="text" placeholder="Nombre del Juego"
                    name="Juego"
                    {...register("Juego", { required: true, minLength: 2 })}
                />
                {errors.Juego?.type == 'required' && <span className={styles.errores}> El nombre del juego es requerido</span>}
                {errors.Juego?.type == 'minLength' && <span className={styles.errores}> El nombre del juego tiene que tener mas de 2 caracteres</span>}

                <div className={styles.contenedorBajo}>
                    <div className={styles.flexing}>
                        <label className={styles.select}>
                            <select {...register("Tipo", { required: true })} className={styles.selecter} id="slct1" name="Tipo">
                                <option value='Tipo' disabled selected hidden>
                                    Tipo
                                </option>
                                <option value="Coop"> Cooperativo
                                </option>
                                <option value="VS"> VS
                                </option>
                                <option value="Party"> Party
                                </option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
                        </label>

                        <label className={styles.select}>
                            <select {...register("Plataforma", { required: true })} className={styles.selecter} id="slct" name="Plataforma">
                                <option value='Plataforma' disabled selected hidden>
                                    Plataforma
                                </option>
                                <option value="PS"> Play Station
                                </option>
                                <option value="SW"> Switch
                                </option>
                                <option value="XB"> Xbox
                                </option>
                                <option value="ST"> Steam
                                </option>
                            </select>
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrow} />
                        </label>
                    </div>
                    <button type="submit" className={styles.envio}>Enviar</button>
                </div>
                {errors.Tipo && <span className={styles.errores}> Tienes que elegir un tipo de juego</span>}
                {errors.Plataforma && <span className={styles.errores}> Tienes que elegir una plataforma de juego</span>}

            </form>
            <div className={styles.desc}>
                <p className={styles.peticion}>Si eres desarrollador y crees que tu juego podría encajar en esta pagina no dudes en <a className={styles.key} href="mailto:reyortegaitor@gmail.com">mandarnos una key</a> para que lo probemos.</p>
                <inportant className={styles.inportant}>Puede que tu juego acabe entre en nuestros favoritos</inportant>
            </div>
        </div>
    );
}
