import React from 'react';
import '../assets/styles/components/Header.scss';

//COMPONENTE PRESENTACIONAL
//(sin lógica, solo envía una sección HTML a nuestra construcción)

const Header = () => (
    //return explícito
    <header className="header">
        <img className="header__img" src='../assets/images/logoceyeneseries.png' alt="Ceyene Series Logo" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src='../assets/images/usuario.png' alt="Usuario" />
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