import React from 'react';
import classes from './box.module.css';

const Box = ({ children, style, innerStyle }) => {
  return (
    <>
      <div style={style} className={classes.boxRow}>
        <div style={innerStyle} className={classes.boxWrapp}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Box;
