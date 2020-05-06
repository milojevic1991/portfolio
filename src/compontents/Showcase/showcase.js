import React, { Children } from 'react';
import classes from './showcase.module.css';

const Showcase = ({ children }) => {
  return (
    <>
      <div className={classes.showcase}>{children}</div>
    </>
  );
};

export default Showcase;
