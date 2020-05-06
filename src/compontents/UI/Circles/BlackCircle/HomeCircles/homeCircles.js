import React from 'react';
import classes from './homeCircles.module.css';
import ImageFadeIn from 'react-image-fade-in';

import map from '../../../../../assets/Images/mapImg.png';

const HomeCircles = () => {
  return (
    <div className={classes.mainCircles}>
      <div className={classes.circleImg}>
        <ImageFadeIn alt="" opacityTransition={1} src={map} />
      </div>
      <div className={classes.smallPurpleCircle}> </div>
      <div className={classes.bigBlackCircle}> </div>
    </div>
  );
};

export default HomeCircles;
