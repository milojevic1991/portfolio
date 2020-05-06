import React from 'react';
import classes from './shadowCircle.module.css';
import Fade from 'react-reveal/Fade';

import splatterPurple from '../../../../../assets/Images/splatter1.png';

const ShadowCircle = ({ text }) => {
  return (
    <>
      <div className={classes.portfolioEduCircle}>
        <Fade bottom>
          <div className={classes.portfolioDarkCircle}>
            <div className={classes.portfolioSmallCircle}></div>
            <div className={classes.portfolioSmallCircleImg}>
              <img src={splatterPurple} alt=""></img>
            </div>
            <h1>{text}</h1>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default ShadowCircle;
