/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/login.css";
export const Login = ({ registro, animacion }) => {
  const [formValue, SetformValues] = useState({
    usuario: "",
    contraseña: "",
  });
  const [error, setError] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    SetformValues({
      ...formValue,
      [name]: value,
    });
  };
  function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(formValue);
      SetformValues({
        usuario: "",
        contraseña: "",
      });
    } catch (err) {
      setError(err);
      console.error(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container_login">
        <div className={`panel_login ${animacion}`}>
          <h1 className="title_login">Login</h1>

          <label htmlFor="Nombre" className="label_login">
            Usuario/Correo
          </label>
          <input
            type="text"
            placeholder="Ingrese el correo o usuario"
            id="Nombre"
            name="usuario"
            value={formValue.usuario}
            onChange={handleOnChange}
            className="input_login"
          />
          {error && (
            <span className="login-error-message-usuario">
              Usuario no existe
            </span>
          )}
          <label htmlFor="Contraseña" className="label_login">
            Contraseña
          </label>
          <input
            type="text"
            placeholder="Ingrese la contraseña"
            name="contraseña"
            value={formValue.contraseña}
            id="Contraseña"
            onChange={handleOnChange}
            className="input_login"
          />
          {error && (
            <span className="login-error-message-usuario">
              Contraseña incorrecta
            </span>
          )}
          <button className="button_login" type="submit">
            Ingresar
          </button>
          <div>
            <button
              className="login_Unaccount"
              type="button"
              onClick={() => registro()}
            >
              ¿Aún no tienes cuenta?
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
