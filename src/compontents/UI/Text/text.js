import React from 'react';
import classes from './text.module.css';

const Text = ({ size, children, styled }) => {
  let tag;
  switch (size) {
    case 'title':
      tag = <h2 className={classes.title}>{children}</h2>;
      break;

    case 'boldTitle':
      tag = <h1 className={classes.boldTitle}>{children}</h1>;
      break;

    case 'subTitle':
      tag = <h1 className={classes.subTitle}>{children}</h1>;
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

    case 'textSecond':
      tag = (
        <p style={styled} className={classes.textSecond}>
          {children}
        </p>
      );
      break;

    default:
      tag = <h1 className={classes.big}>{children}</h1>;
  }
  return tag;
};

export default Text;
