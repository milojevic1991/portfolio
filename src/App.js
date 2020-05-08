import React from 'react';
import './App.css';
import NavBar from './compontents/NavBar/navBar';

import Homepage from './compontents/Main/Homepage/homepage';
import AboutMe from './compontents/Main/AboutMe/aboutMe';
import Portfolio from './compontents/Main/Portfolio/portfolio';
import Contact from './compontents/Main/Contact/contact';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Main /> */}
      <Route path="/about" component={AboutMe} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/" exact component={Homepage} />
    </div>
  );
}

export default App;
