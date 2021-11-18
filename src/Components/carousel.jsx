import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { carouselItems } from "../data/data";
import '../styles/carousel.css'


const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className="carousel-container">
          <div className="arrow arrow-left" side="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlined />
          </div>
          <div className="wrapper" style={{transform: `translateX(${slideIndex*-100}vw)`}} slideIndex={slideIndex}>
            {carouselItems.map((item) => (
              <div className="slide" bg={item.bg} key={item.id}>
                <div className="img">
                  <img src={item.img} />
                </div>
                <div className="item-info">
                  <h4>{item.carouseltitle}</h4>
                  <h5>{item.desc}</h5>
                  <button>SHOW NOW</button>
                </div>
              </div>
            ))}
          </div>
          <div className="arrow arrow-right" side="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlined />
          </div>
        </div>
      );
}

export default Carousel
