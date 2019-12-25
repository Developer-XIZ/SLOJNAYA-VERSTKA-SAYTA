import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner">
        <div className="slider">
            <div className="arrow_left"></div>
            <div className="photo">
                <p>Строительство домов под ключ</p>
            </div>
            <div className="arrow_right"></div>
        </div>
        
        <div className="slider_switch">
            <span className="active"></span>
            <span></span>
            <span></span>
        </div>
    </div>
  );
}

export default Banner;