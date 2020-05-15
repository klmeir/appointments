import React, { Fragment } from "react";

const Form = () => {
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
        />

        <label>Nombre Dueño</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
        />

        <label>Fecha Dueño</label>
        <input 
            type="date" 
            name="date" 
            className="u-full-width"                 
        />

        <label>Hora</label>
        <input 
            type="time" 
            name="hour" 
            className="u-full-width"             
        />

        <label>Síntomas</label>
        <textarea 
            className="u-full-width" 
            name="symptoms"
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
