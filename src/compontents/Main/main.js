import React from 'react';
import Homepage from './Homepage/homepage';
import AboutMe from './AboutMe/aboutMe';
import Portfolio from './Portfolio/portfolio';
import Contact from './Contact/contact';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './main.module.css';

import { Route, Switch, useLocation } from 'react-router-dom';

const Main = () => {
  const location = useLocation();
  return (
    <main className={classes.mainWrapper}>
      <AnimatePresence exitBeforeEnter>
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Homepage} />
      </AnimatePresence>
    </main>
  );
};

export default Main;
