/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './soc_icons.css';

const SocIcons = () => {
  return (
    <div className="soc_icons">
        <p>Подписаться на наши новости:
            <a href="#"><i className="fa fa-rss"></i></a>
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-vk"></i></a>
            <a href="#"><i className="fa fa-twitter"></i></a>
        </p>
    </div>
  );
}

export default SocIcons;
