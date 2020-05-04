import React from 'react';
import classes from './header.module.css';

const Header = ({ children }) => {
  return <div className={classes.header}> {children}</div>;
};

export default Header;
