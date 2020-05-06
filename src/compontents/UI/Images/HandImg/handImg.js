import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import classes from './handImg.module.css';
import handPhoto from '../../../../assets/Images/handAbout.png';
import handPhotoRight from '../../../../assets/Images/handAboutRight.png';

const HandImg = ({ right }) => {
  return (
    <div className={right ? classes.handImgRight : classes.handImg}>
      <ImageFadeIn
        alt=""
        opacityTransition={0.3}
        src={right ? handPhotoRight : handPhoto}
      />
    </div>
  );
};

export default HandImg;
