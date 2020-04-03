import React from 'react';
import classes from './button.module.css';

const Button = ({children}) => {
   return (
     <a className ={classes.mainBtn} >{children}</a>
   );
};

export default Button;