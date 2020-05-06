import React from 'react';
import classes from './social.module.css';

const Social = ({ linkedin, git }) => {
  return (
    <div className={classes.socialIcons}>
      <a href={linkedin}>
        <i class="lab la-linkedin-in"></i>
      </a>
      <a href={git}>
        <i class="lab la-github"></i>
      </a>
    </div>
  );
};

export default Social;
