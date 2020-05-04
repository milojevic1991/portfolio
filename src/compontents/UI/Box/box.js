import React from 'react';
import classes from './box.module.css';

const Box = ({ children }) => {
  return (
    <>
      <div className={classes.boxRow}>
        <div className={classes.boxWrapp}>{children}</div>
      </div>
    </>
  );
};

export default Box;
