import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './homepage.module.css';

import Bubble from '../../../assets/Images/bubble1-purple.png';
import BubbleRight from '../../../assets/Images/bubble2-purple.png';
import Fade from 'react-reveal/Fade';
import ImageFadeIn from 'react-image-fade-in';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import Header from '../../UI/Header/header';
import HomeCircles from '../../UI/Circles/BlackCircle/HomeCircles/homeCircles';
import Box from '../../UI/Box/box';
import Social from '../../UI/Icon/Social/social';
import Button from '../../UI/Button/button';
import Title from '../../UI/Text/Title/title.js';
import Text from '../../UI/Text/text';
import Arrow from '../../UI/Icon/Arrow/arrow';

const Homepage = () => {
  const [styleBox, setStyleBox] = useState({ padding: '3% 6%' });

  function resized() {
    if (window.innerWidth > 768) {
      setStyleBox({ padding: '3% 6%' });
    } else {
      setStyleBox(null);
    }
  }

  useEffect(() => {
    resized();
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

          <Title home={true}>
            <Fade delay={330}>Hello. I'm Nemanja.</Fade>
          </Title>

          <Text size={'subTitle'}>
            <Fade delay={1000}>Front-End Developer & UX/UI Designer.</Fade>
          </Text>
        </Header>

        <Arrow />

        <Box style={{ padding: '5% 0' }} innerStyle={styleBox}>
          <Fade top>
            <div className={classes.nemanjaImg}></div>
          </Fade>
          <Social git="/" linkedin="/" />
          <Text size="titleHome">
            <Fade delay={130}> I build things that people use.</Fade>
          </Text>
          <Text size="textMain">
            Hi, I'm Nemanja, a front-end developer and co-founder of{' '}
            <a href="\" target="_blank">
              CodeSymphony.io
            </a>{' '}
            web agency. I enjoy creating things from scratch, whether that be
            websites, applications, or anything in between.
          </Text>
          <Fade top delay={260}>
            <div className={classes.btnRow}>
              <Button to="/about">About me</Button>
            </div>
          </Fade>
        </Box>
      </MainWrap>
    </>
  );
};

export default Homepage;
