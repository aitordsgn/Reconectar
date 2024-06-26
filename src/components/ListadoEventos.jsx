import styles from '../styles/Event.module.css';
import Event from './Event'; // Importa el componente Event

const ListadoEventos = ({ eventos }) => {
  return (
    <div className={styles.EventList}>
      <h1>Próximas Citas</h1>
      <div className={styles.notificationContainer}> {/* Agrega un contenedor para los eventos */}
          {eventos.map((evento) => (
            <Event key={evento.id} {...evento}/>
          )
        )
        }
      </div>
    </div>
  );
};

export default ListadoEventos;
