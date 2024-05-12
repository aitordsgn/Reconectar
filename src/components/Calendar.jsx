import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';

const CalendarioEventos = ({ eventos }) => {
  // Extraer solo las fechas de los eventos
  const fechasEventos = eventos.map((evento) => new Date(evento.fecha));

  return (
    <Calendar
      // Configuración para mostrar la vista mensual inicialmente
      minDetail="month"
      view="month"
      // Aquí marcamos las fechas que tienen eventos
      tileClassName={({ date, view }) => {
        if (
          view === 'month' && // Solo queremos marcar en la vista mensual
          fechasEventos.find(
            (evento) => evento.toDateString() === date.toDateString()
          )
        ) {
          return 'highlight'; // Clase CSS para destacar días con eventos
        }
      }}
    />
  );
};

export default CalendarioEventos;
