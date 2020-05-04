import React from 'react';
import classes from './mainWrapp.module.css';

const MainWrapp = ({ children }) => {
  return <div className={classes.mainWrapp}>{children}</div>;
};

export default MainWrapp;
