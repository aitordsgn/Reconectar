import Calendar from 'react-calendar';
import styled from 'styled-components';
import '../styles/calendar.css';

export function CalendarEdit() {
  return (
    <CalendarContainer>
      <Calendar calendarType='iso8601' 
      minDetail='year' />
    </CalendarContainer>
  );
}

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 50vw;
  max-height: 50vh;
  margin: auto;
  margin-top: 20px;
  background-color: #d4f7d4;
  padding: 10px;
  border-radius: 3px;
`;