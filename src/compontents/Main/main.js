import React from 'react';
import Homepage from './Homepage/homepage';
import AboutMe from './AboutMe/aboutMe';
import Portfolio from './Portfolio/portfolio';
import Contact from './Contact/contact';

import classes from './main.module.css';

import { Route, Switch } from 'react-router-dom';

const Main = () => {
  return (
    <main className={classes.mainWrapper}>
      <Route path="/" exact component={Homepage} />
      <Route path="/about" component={AboutMe} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </main>
  );
};

export default Main;
