import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/components/Modal.scss";

const Modal = ({ isOpen, onClose, source }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal-container">
        <h3 className="Modal-title">Estás por salir de la página</h3>
        <p className="Modal-text">
          Para leer esta historia, vas a ingresar al blog El frasco de
          historias. ¿Estás de acuerdo?
        </p>
        <a href={source}>
          <button type="button" className="Modal-button-yes">
            Sí, vamos
          </button>
        </a>
        <button type="button" className="Modal-button-no" onClick={onClose}>
          No, volvamos
        </button>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
