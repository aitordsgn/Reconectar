import React from 'react';
import Event from './Event';

const ListadoEventos = () => {
    // Step 1: Retrieve event data from local storage
    const eventData = localStorage.getItem('events');
    // Step 2: Parse event data into an array
    const events = JSON.parse(eventData) || [];
    return (
        <div>
            <h2>Listado de Eventos</h2>
            <ul>
                {/* Step 3: Map over the array to create a list of event components */}
                {events.map((event, index) => (
                    <Event key={index} event={event} />
                ))}
            </ul>
        </div>
    );
};

export default ListadoEventos;