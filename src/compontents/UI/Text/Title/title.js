import React from 'react';
import classes from './title.module.css';

const Title = ({ children, home = false }) => {
  return (
    <h1 className={home ? classes.titleHome : classes.title}>{children}</h1>
  );
};

export default Title;
