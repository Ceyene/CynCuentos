import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";
import readIcon from "../assets/static/leer.png";
import plusIcon from "../assets/static/add.png";
import removeIcon from "../assets/static/delete.png";

const CarouselItem = (props) => {
  const { id, cover, title, type, year, contentRating, length, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, type, year, contentRating, length });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div className="carousel-item__details--actions">
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={readIcon}
              alt="Abrir"
            />
          </Link>
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
