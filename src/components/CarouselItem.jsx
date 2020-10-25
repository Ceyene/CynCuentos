import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/add.png';

const CarouselItem = ({ cover, title, author, year, contentRating, pags }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div className="carousel-item__details--actions">
                <img className="carousel-item__details--img" src={playIcon} alt="Reproducir" />
                <img className="carousel-item__details--img" src={plusIcon} alt="Más" />
            </div>
            <div className="carousel-item__details--info">
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--author">{author}</p>
                <p className="carousel-item__details--subtitle">{`${year} - ${contentRating} - ${pags} páginas`}</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;