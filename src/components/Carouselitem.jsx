import React from 'react';

const CarouselItem = () =>(
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images./pexels.com/photos/78"/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src="../assets/play-icon.png"/>
                <img className="carousel-item__details--img" src="../assets/plus-icon.png"/>
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">Titulo descriptivo</p>
        </div>
    </div>
);

export default CarouselItem;