import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import readIcon from '../assets/static/leer.png';
import plusIcon from '../assets/static/add.png';

const CarouselItem = ({ cover, title, type, year, contentRating, length }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div className="carousel-item__details--actions">
                <img className="carousel-item__details--img" src={readIcon} alt="Abrir" />
                <img className="carousel-item__details--img" src={plusIcon} alt="Guardar en favoritos" />
            </div>
            <div className="carousel-item__details--info">
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--genre">{type}</p>
                <p className="carousel-item__details--subtitle">{`${year} - ${contentRating} - ${length}`}</p>
            </div>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    length: PropTypes.string,
}

export default CarouselItem;