import React from "react";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/googleicon.png";
import twitterIcon from "../assets/static/twittericon.png";

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia Sesión</h2>
      <form className="login__container--form">
        <input type="text" className="input" placeholder="Correo" />
        <input type="text" className="input" placeholder="Contraseña" />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label for="">
            <input type="checkbox" id="cbox1" value="checkbox" />
            Recordarme
          </label>
          <a href="">Olvidé mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" /> Iniciar sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter" /> Iniciar sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        ¿No tengo ninguna cuenta? <a href="register.html">Registrarme</a>
      </p>
    </section>
  </section>
);

export default Login;
