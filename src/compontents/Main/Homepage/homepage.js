import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './homepage.module.css';
import map from '../../../assets/Images/mapImg.png';
import Button from '../../UI/Button/button';
import Bubble from '../../../assets/Images/bubble1-purple.png';
import BubbleRight from '../../../assets/Images/bubble2-purple.png';
import { motion } from 'framer-motion';
import TextLoop from 'react-text-loop';

import Fade from 'react-reveal/Fade';
import ImageFadeIn from 'react-image-fade-in';

const Homepage = () => {
  const [isScrolling, setIsScroling] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={classes.homepage}>
        <div className={classes.headerSection}>
          <ImageFadeIn
            className={classes.headerBubble}
            alt=""
            opacityTransition={0.7}
            src={Bubble}
          />
          <ImageFadeIn
            className={classes.headerBubbleRight}
            alt=""
            opacityTransition={0.9}
            src={BubbleRight}
          />
          <div className={classes.mainCircles}>
            <div className={classes.circleImg}>
              <ImageFadeIn alt="" opacityTransition={1} src={map} />
            </div>
            <div className={classes.smallPurpleCircle}> </div>
            <div className={classes.bigBlackCircle}> </div>
          </div>

          <Fade delay={330}>
            <h1> Hello. I'm Nemanja.</h1>
          </Fade>

          <Fade delay={1000}>
            <h6> Front-End Developer {'&'} UX/UI Designer</h6>
          </Fade>
        </div>

        <div className={classes.arrowDown}>
          <i class="las la-long-arrow-alt-down"></i>
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
              <Button to="/about">About me</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
