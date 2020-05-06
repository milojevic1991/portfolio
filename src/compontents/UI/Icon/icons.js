import React from 'react';
import classes from './icons.module.css';
const Icons = ({ icons = 3 }) => {
  const iconStack1 = (
    <div className={classes.aboutMeWorkTech}>
      <span>
        <i className="lab la-js-square"></i>
      </span>
      <span>
        <i class="lab la-react"></i>
      </span>
      <span>
        <i class="lab la-css3"></i>
      </span>
      <span>
        <i class="lab la-html5"></i>
      </span>
      <span>
        <i class="lab la-sass"></i>
      </span>
      <span>
        <i class="lab la-github"></i>
      </span>
      <span>
        <i class="lab la-wordpress-simple"></i>
      </span>
      <span>
        <i class="lab la-npm"></i>
      </span>
    </div>
  );

  const iconStack2 = (
    <div className={classes.aboutMeWorkTech}>
      <span>
        <i class="lab la-react"></i>
      </span>
      <span>
        <i class="lab la-js-square"></i>
      </span>
      <span>
        <i class="lab la-html5"></i>
      </span>
      <span>
        <i class="lab la-css3"></i>
      </span>
      <span>
        <i class="lab la-bootstrap"></i>
      </span>
      <span>
        <i class="lab la-github"></i>
      </span>
      <span>
        <i class="lab la-wordpress-simple"></i>
      </span>
      <span>
        <i class="lab la-node-js"></i>
      </span>
    </div>
  );

  const iconStack3 = (
    <div className={classes.aboutMeWorkTech}>
      <span>
        <i class="lab la-js-square"></i>
      </span>
      <span>
        <i class="lab la-css3"></i>
      </span>
      <span>
        <i class="lab la-html5"></i>
      </span>
      <span>
        <i class="lab la-sass"></i>
      </span>
      <span>
        <i class="lab la-wordpress-simple"></i>
      </span>
      <span>
        <i class="lab la-adobe"></i>
      </span>
    </div>
  );

  return (
    <>{icons === 1 ? iconStack1 : icons === 2 ? iconStack2 : iconStack3}</>
  );
};

export default Icons;
