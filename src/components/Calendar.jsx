import React, { useState } from 'react';
import '../styles/Calendar.css';

export function Calendar(){
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div>
      <button onClick={handlePrevMonth}>Prev</button>
      <button onClick={handleNextMonth}>Next</button>
      <div className="month">{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</div>
      <div className="calendar">
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div key={day} className="day-of-week">{day}</div>
          ))}
        </div>
        <div className="days">
          {days.map((day) => (
            <div key={day} className="day">{day}</div>
          ))}
        </div>
      </div>
    </div>
  );
}