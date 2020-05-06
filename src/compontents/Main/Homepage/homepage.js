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
import Title from '../../UI/Text/Title/title.js';
import Text from '../../UI/Text/text';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import Header from '../../UI/Header/header';
import HomeCircles from '../../UI/Circles/BlackCircle/HomeCircles/homeCircles';
import Box from '../../UI/Box/box';
import Social from '../../UI/Icon/Social/social';

import Arrow from '../../UI/Icon/Arrow/arrow';

const Homepage = () => {
  const [isScrolling, setIsScroling] = useState(false);

  const [styleBox, setStyleBox] = useState(null);

  function resized() {
    if (window.innerWidth > 768) {
      setStyleBox({ padding: '5% 8%' });
    } else {
      setStyleBox(null);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resized);
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <MainWrap>
        <Header style={{ backgroundColor: 'transparent' }}>
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

          <HomeCircles />

          <Title>
            <Fade delay={330}>Hello. </Fade>
          </Title>

          <Text size={'subTitle'}>
            <Fade delay={1000}>
              I'm Nemanja. Front-End Developer UX/UI Designer.{' '}
            </Fade>
          </Text>
        </Header>

        {/* <div className={classes.arrowDown}>
          <i class="las la-long-arrow-alt-down"></i>
        </div> */}

        <Arrow />

        <Box style={{ padding: '5% 0' }} innerStyle={styleBox}>
          <div className={classes.nemanjaImg}></div>
          <Social git="/" linkedin="/" />
          <Text size="title">Ćao, ja sam Nemanja.</Text>
          <Text size="textMain">
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
          </Text>
          <div className={classes.btnRow}>
            <Button to="/about">About me</Button>
          </div>
        </Box>

        {/* <div className={classes.about}>
          <div className={classes.aboutText}>
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
          </div>
        </div> */}
      </MainWrap>
    </>
  );
};

export default Homepage;
