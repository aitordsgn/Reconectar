import styles from '../styles/Event.module.css'

const Event = (evento) => {
    return (
        <div className={styles.notification}>
            <div className={styles.notiglow}></div>
            <div className={styles.notiborderglow}></div>
            <strong className={styles.notititle}>{evento.titulo}</strong>
            <p className={styles.notibody}>{evento.fecha}</p>
            <p className={styles.notibody}>{evento.tipo}</p>

        </div>
    );
};

export default Event;