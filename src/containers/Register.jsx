import React from "react";
import "../assets/styles/components/Register.scss";

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Crea tu nueva cuenta</h2>
      <form className="register__container--form">
        <input type="text" className="input" placeholder="Nombre" />
        <input type="text" className="input" placeholder="Correo" />
        <input type="text" className="input" placeholder="Contraseña" />
        <button className="button">Registrarme</button>
      </form>
      <p className="register__container--login">
        Ya tengo una cuenta:
        <a href="login.html">Iniciar sesión</a>
      </p>
    </section>
  </section>
);

export default Register;
