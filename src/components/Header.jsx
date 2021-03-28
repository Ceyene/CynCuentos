import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import gravatar from "../utils/gravatar";
import logo from "../assets/static/logoceyenelibros.png";
import userIcon from "../assets/static/usuario.png";

//COMPONENTE PRESENTACIONAL
//(sin lógica, solo envía una sección HTML a nuestra construcción)

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    //return explícito
    <header className="header">
      <Link to="/">
        <img className="header__img" src={logo} alt="Ceyene Libros Logo" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="Usuario" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <li>
              <Link to="/">{user.name}</Link>
            </li>
          ) : null}

          {hasUser ? (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Cerrar sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
