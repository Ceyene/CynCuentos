import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <section className="not-found__container">
    <section className="not-found">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link to="/">Volver a inicio</Link>
    </section>
  </section>
);

export default NotFound;
