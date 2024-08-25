/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/register.css";

export const Register = ({ login }) => {
  const [formValue, SetformValue] = useState({
    nombre: "",
    usuario: "",
    correo: "",
    contraseña: "",
    repetirContraseña: "",
  });
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    SetformValue({
      ...formValue,
      [name]: value,
    });
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formValue);
      //enviar info para el registro
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container_Register">
        <div className="RegisterPanel">
          <h1 className="Register_title">Register</h1>
          <label htmlFor="Nombre" className="Register_label">
            Nombre
          </label>
          <input
            type="text"
            id="Nombre"
            name="nombre"
            value={formValue.nombre}
            onChange={handleOnChange}
            placeholder="Ingrese nombre"
            className="Register_input"
          />
          <label htmlFor="Usuario" className="Register_label">
            Usuario
          </label>
          <input
            type="text"
            id="Usuario"
            name="usuario"
            value={formValue.usuario}
            onChange={handleOnChange}
            placeholder="Ingrese usuario"
            className="Register_input"
          />
          {error && (
            <span className="Register-error-message-usuario">
              Usuario ya existe
            </span>
          )}
          <label htmlFor="Correo" className="Register_label">
            Correo
          </label>
          <input
            type="text"
            id="Correo"
            name="correo"
            value={formValue.correo}
            onChange={handleOnChange}
            placeholder="Ingrese usuario"
            className="Register_input"
          />
          <label htmlFor="Contraseña" className="Register_label">
            Contraseña
          </label>
          <input
            type="text"
            id="Contraseña"
            name="contraseña"
            value={formValue.contraseña}
            onChange={handleOnChange}
            placeholder="Ingrese contraseña"
            className="Register_input"
          />
          <label htmlFor="RepetirContraseña" className="Register_label">
            Repetir Contraseña
          </label>
          <input
            type="text"
            id="RepetirContraseña"
            name="repetirContraseña"
            value={formValue.Repetircontraseña}
            onChange={handleOnChange}
            placeholder="Repita contraseña"
            className="Register_input"
          />
          {error && (
            <span className="Register-error-message-usuario">
              Contraseñas no coinciden
            </span>
          )}
          <button className="Register_button" type="submit">
            Registarse
          </button>
          <div>
            <button className="Register_Unaccount" onClick={() => login()}>
              ¿tienes cuenta?
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
