import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  let appointmentsInitials = JSON.parse(localStorage.getItem('appointments'));
  if(!appointmentsInitials) {
    appointmentsInitials = [];
  }

  const [appointments, setAppointments] = useState(appointmentsInitials);

  useEffect( () => {
    if(appointmentsInitials) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(newAppointments);
  }

  const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}                
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
