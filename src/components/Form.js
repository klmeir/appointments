import React, { Fragment, useState } from "react";

const Form = () => {
  
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: '',
  });

  const handleChange = () => {
    console.log('Escribiendo...');
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={handleChange}
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
          onChange={handleChange}
        />

        <label>Fecha Dueño</label>
        <input 
            type="date" 
            name="date" 
            className="u-full-width"                 
            onChange={handleChange}
        />

        <label>Hora</label>
        <input 
            type="time" 
            name="hour" 
            className="u-full-width"             
            onChange={handleChange}
        />

        <label>Síntomas</label>
        <textarea 
            className="u-full-width" 
            name="symptoms"
            onChange={handleChange}
        >
        </textarea>

        <button 
            type="submit" 
            className="u-full-width button-primary"
        >
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
