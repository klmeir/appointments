import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, hour, symptoms } = appointment;

  const handleForm = (e) => {
    e.preventDefault();

    // validate
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    // assign ID
    appointment.id = uuidv4();    

    // create appointment
    createAppointment(appointment);

    // restart form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      hour: "",
      symptoms: "",
    });

  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={handleForm}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha Dueño</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
}

export default Form;
