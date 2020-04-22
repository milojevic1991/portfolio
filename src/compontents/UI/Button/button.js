import React from 'react';
import classes from './button.module.css';
import { NavLink } from 'react-router-dom';

const Button = ({ children, to }) => {
  return (
    <NavLink className={classes.mainBtn} to={to}>
      {children}
    </NavLink>
  );
};

export default Button;
