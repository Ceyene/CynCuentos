import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";
import Modal from "./Modal";
import readIcon from "../assets/static/read.svg";
import plusIcon from "../assets/static/add.svg";
import removeIcon from "../assets/static/delete.svg";

const CarouselItem = (props) => {
  const {
    id,
    cover,
    title,
    type,
    year,
    contentRating,
    length,
    isList,
    source,
  } = props;
  const [modal, setModal] = useState(false);
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      type,
      year,
      contentRating,
      length,
      source,
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  const handleClose = (e) => {
    setModal(false);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--actions">
          <img
            className="carousel-item__details--img"
            src={readIcon}
            alt="Ir a la historia"
            onClick={() => setModal(true)}
          />
          <Modal
            source={source}
            isOpen={modal}
            onClose={() => {
              handleClose();
            }}
          />
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Eliminar de favoritos"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Guardar en favoritos"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <div className="carousel-item__details--info">
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--genre">{type}</p>
          <p className="carousel-item__details--subtitle">{`${year} - ${contentRating} - ${length}`}</p>
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  length: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
