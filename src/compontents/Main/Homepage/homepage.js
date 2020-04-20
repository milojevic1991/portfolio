import React from 'react';
import classes from './homepage.module.css';
import map from '../../../assets/Images/mapImg.png';
import Button from '../../UI/Button/button';

const Homepage = () => {
  return (
    <>
      <div className={classes.homepage}>
        <div className={classes.headerSection}>
          <a className={classes.langBtn} href="/">
            SR
          </a>

          <div className={classes.mainCircles}>
            <div className={classes.circleImg}>
              <img src={map}></img>
            </div>
            <div className={classes.smallPurpleCircle}> </div>
            <div className={classes.bigBlackCircle}> </div>

            {/* <div className={classes.circleImg}>
                     <img src={map}></img>
                      </div> */}
          </div>
          <h1>Neki tekst ovde.</h1>
          <h3>Neki tekst ovde.Neki tekst ovde.Neki tekst ovde.</h3>
        </div>
        <div className={classes.about}>
          <div className={classes.aboutText}>
            <div className={classes.nemanjaImg}> </div>
            <h2>Ćao, ja sam Nemanja.</h2>
            <div className={classes.socialIcons}>
              <a href="/">
                <i class="lab la-linkedin-in"></i>
              </a>
              <a href="/">
                <i class="lab la-github"></i>
              </a>
            </div>
            <p>
              I'm a digital designer that made the trip across the pond from
              Glasgow, Scotland to{' '}
              <a href="\" target="_blank">
                #HamOnt
              </a>
              , Canada, in 2010. Now I work @{' '}
              <a href="\" target="_blank">
                Jan Kelley
              </a>{' '}
              in Burlington as UX Lead and Senior Art Director.
            </p>
            <div className={classes.btnRow}>
              <Button>ZDRAVO</Button>
            </div>
          </div>
        </div>
        <div className={classes.aboutHomeShort}></div>
      </div>
    </>
  );
};

export default Homepage;
