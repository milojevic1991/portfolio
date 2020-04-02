import React from 'react';
import Homepage from './Homepage/homepage';
import AboutMe from './AboutMe/aboutMe';
import classes from './main.module.css';

import {Route} from 'react-router-dom';

const Main = () => {
   return (
      <main className={classes.mainWrapper} >

         <Route path='/about' component={AboutMe} / >
         <Route path='/' exact component={Homepage} / >
      
      </main>
   );
};

export default Main;