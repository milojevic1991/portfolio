import React from 'react';
import classes from './headerWrapp.module.css';
const HeaderWrapp = ({ children }) => {
  return <div className={classes.headerWrapp}>{children}</div>;
};

export default HeaderWrapp;
