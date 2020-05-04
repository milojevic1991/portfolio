import React from 'react';
import classes from './text.module.css';

const Text = ({ size, children }) => {
  let tag;
  switch (size) {
    case 'title':
      tag = <h2 className={classes.title}>{children}</h2>;
      break;

    case 'workTitle':
      tag = <h1 className={classes.workTitle}>{children}</h1>;
      break;

    case 'workTitleMedium':
      tag = <h1 className={classes.workTitleMedium}>{children}</h1>;
      break;

    case 'workTitleSmall':
      tag = <h5 className={classes.workTitleSmall}>{children}</h5>;
      break;

    case 'textMain':
      tag = <p className={classes.textMain}>{children}</p>;
      break;

    default:
      tag = <h1 className={classes.big}>{children}</h1>;
  }
  return tag;
};

export default Text;
