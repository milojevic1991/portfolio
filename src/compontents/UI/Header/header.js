import React from 'react';
import classes from './header.module.css';

const Header = ({ children, style }) => {
  return (
    <div className={classes.header} style={style}>
      {children}
    </div>
  );
};

export default Header;
