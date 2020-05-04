import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import classes from './handImg.module.css';
import handPhoto from '../../../../assets/Images/handAbout.png';

const HandImg = () => {
  return (
    <div className={classes.handImg}>
      <ImageFadeIn alt="" opacityTransition={0.3} src={handPhoto} />
    </div>
  );
};

export default HandImg;
