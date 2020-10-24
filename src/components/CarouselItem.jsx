import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/add.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://dummyimage.com/250x350/696469/2e2e30.jpg&text=book" alt="libro" />
        <div className="carousel-item__details">
            <div className="carousel-item__details--actions">
                <img className="carousel-item__details--img" src={playIcon} alt="Reproducir" />
                <img className="carousel-item__details--img" src={plusIcon} alt="Más" />
            </div>
            <div className="carousel-item__details--info">
                <p className="carousel-item__details--title">Libro número uno</p>
                <p className="carousel-item__details--subtitle">2014 13+ 300 páginas</p>
            </div>
        </div>
    </div>
);

export default CarouselItem;