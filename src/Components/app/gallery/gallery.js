/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="gallery">
        <h2>Галерея</h2>
        <div className="slider">
            <div className="arrow_left"></div>
            <div className="photo">
                <a href={require("./gallery.jpg")} target="_blank"><img src={require("./gallery_small.jpg")} alt="gallery_small"/></a>
                <a href={require("./gallery.jpg")} target="_blank"><img src={require("./gallery_small.jpg")} alt="gallery_small"/></a>
                <a href={require("./gallery.jpg")} target="_blank"><img src={require("./gallery_small.jpg")} alt="gallery_small"/></a>
                <a href={require("./gallery.jpg")} target="_blank"><img src={require("./gallery_small.jpg")} alt="gallery_small"/></a>
            </div>
            <div className="arrow_right"></div>
        </div>
    </div>
  );
}

export default Gallery;
