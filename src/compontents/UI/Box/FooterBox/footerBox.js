import React from 'react';
import classes from './footerBox.module.css';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const FooterBox = ({ to, title, type }) => {
  return (
    <Fade bottom>
      <div className={classes[type]}>
        <NavLink to={`/${to}`}>{title}</NavLink>
      </div>
    </Fade>
  );
};

export default FooterBox;
