import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

  const [appointments, setAppointments] = useState([]);

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
            <h2>Administra tus citas</h2>
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
