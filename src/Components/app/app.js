import React from 'react';
import Header from './header';
import Container from './container';
import Gallery from './gallery';
import Footer from './footer';
import './mobile.css';
import './app.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container />
      <Gallery />
      <Footer />
    </React.Fragment>
  );
}

export default App;
