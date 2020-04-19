import React from 'react';
import classes from './header.module.css';
import splatterAbout from '../../../assets/Images/splatterAbout.png';

const Header = ({ headerImg, alt, headerTitle, background }) => {
  return (
    <>
      <div className={classes.header} style={{ background: { background } }}>
        <div className={classes.headerImg}>
          <img alt={alt} src={headerImg}></img>
        </div>
        <div className={classes.headerTitle}>
          <div className={classes.headerSmallDarkCircle}> </div>
          <img
            alt=""
            className={classes.splatterImgHeader}
            src={splatterAbout}
          ></img>
        </div>
        <h1>{headerTitle}</h1>
      </div>
    </>
  );
};

export default Header;
