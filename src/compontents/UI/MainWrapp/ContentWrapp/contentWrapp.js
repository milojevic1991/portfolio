import React from 'react';
import classes from './contentWrapp.module.css';
const ContentWrapp = ({ type, children }) => {
  const wrappClass =
    type === 'about'
      ? classes.aboutWrapp
      : type === 'aboutEdu'
      ? classes.aboutWrappEdu
      : classes.portfolioWrapp;

  return <div className={wrappClass}>{children}</div>;
};

export default ContentWrapp;
