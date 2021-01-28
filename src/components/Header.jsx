import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";

import logo from "../assets/static/logoceyenelibros.png";
import userIcon from "../assets/static/usuario.png";

//COMPONENTE PRESENTACIONAL
//(sin lógica, solo envía una sección HTML a nuestra construcción)

const Header = () => (
  //return explícito
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Ceyene Libros Logo" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="Usuario" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to="/login">Cuenta</Link>
        </li>
        <li>
          <Link to="/login">Cerrar sesión</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
