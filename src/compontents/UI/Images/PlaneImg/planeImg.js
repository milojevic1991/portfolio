import React from 'react';
import classes from './planeImg.module.css';
import ImageFadeIn from 'react-image-fade-in';

import contactPlane from '../../../../assets/Images/contact-image.png';

const PlaneImg = () => {
  return (
    <div className={classes.planeImg}>
      <ImageFadeIn
        alt="contactNemanja"
        opacityTransition={1}
        src={contactPlane}
      />
    </div>
  );
};

export default PlaneImg;
