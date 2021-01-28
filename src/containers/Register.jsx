import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Register.scss";

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Crea tu nueva cuenta</h2>
      <form className="register__container--form">
        <input type="text" className="input" placeholder="Nombre" />
        <input type="text" className="input" placeholder="Correo" />
        <input type="text" className="input" placeholder="Contraseña" />
        <button type="button" className="button">
          Registrarme
        </button>
      </form>
      <p className="register__container--login">
        Ya tengo una cuenta:
        <Link to="/login">Iniciar sesión</Link>
      </p>
    </section>
  </section>
);

export default Register;
