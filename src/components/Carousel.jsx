import React from "react";
import "../styles/Carousel.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import{ cars }from '../cars'



const Carousel2 = () => {
  const { cars } = useSelector((state) => state);
  
      return (
        <div className="carouselContainer">
          <Carousel showThumbs={false} >
            {cars.map((car)=> (
              <div key = {car.carId} >
                  <img src={car.carImage}  alt=""/>
                  <p className="legend">{car.carMake}  {car.carEngineSize}</p>
              </div>
             ))}
          </Carousel>
          </div>
      );
  }

export default Carousel2;