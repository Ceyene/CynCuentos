import React from 'react';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logoceyenelibros.png';
import userIcon from '../assets/static/usuario.png';

//COMPONENTE PRESENTACIONAL
//(sin lógica, solo envía una sección HTML a nuestra construcción)

const Header = () => (
    //return explícito
    <header className="header">
        <img className="header__img" src={logo} alt="Ceyene Libros Logo" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="Usuario" />
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <a href="login.html">Cuenta</a>
                </li>
                <li>
                    <a href="login.html">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;