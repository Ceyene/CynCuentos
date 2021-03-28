import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerRequest } from "../actions";
import "../assets/styles/components/Register.scss";

const Register = (props) => {
  const [form, setValue] = useState({
    email: "",
    name: "",
    password: "",
  });
  const handleInput = (event) => {
    setValue({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault;
    props.registerRequest(form);
    props.history.push("/");
  };
  return (
    <section className="register">
      <section className="register__container">
        <h2>Crea tu nueva cuenta</h2>
        <form className="register__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            className="input"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            name="email"
            type="text"
            className="input"
            placeholder="Correo"
            onChange={handleInput}
          />
          <input
            name="password"
            type="text"
            className="input"
            placeholder="Contraseña"
            onChange={handleInput}
          />
          <button type="submit" className="button">
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
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
