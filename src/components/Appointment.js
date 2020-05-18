import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => (
    <div className="cita">
        <p>Mascota: <span>{appointment.pet}</span> </p>
        <p>Dueño: <span>{appointment.owner}</span> </p>
        <p>Fecha: <span>{appointment.date}</span> </p>
        <p>Hora: <span>{appointment.hour}</span> </p>
        <p>Sintomas: <span>{appointment.symptoms}</span> </p>

        <button
            className="button eliminar u-full-width"
            onClick={() => deleteAppointment(appointment.id)}
        >Eliminar &times;</button>
    </div>
)
 
export default Appointment;