import React from 'react';
import Menu from './menu';
import SocIcons from './soc_icons';
import Banner from './banner';
import Content from './content';
import './container.css';

const Container = () => {
  return (
    <div className="container">
      <Menu />
      <SocIcons />
      <Banner />
      <Content />
    </div>
  );
}

export default Container;
