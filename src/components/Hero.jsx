import React from "react";
import "../assets/styles/components/Hero.scss";

const mainTitleText = "¿Qué vas a leer hoy?";

const Hero = () => (
  <section className="main">
    <h2 className="main__title">{mainTitleText}</h2>
  </section>
);

export default Hero;
