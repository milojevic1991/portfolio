import React, { useEffect, useState } from 'react';
import classes from './aboutMe.module.css';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import Header from '../../UI/Header/header';
import Title from '../../UI/Text/Title/title.js';
import HandImg from '../../UI/Images/HandImg/handImg';
import HeaderWrapp from '../../UI/Header/HeaderWrapp/headerWrapp';
import Text from '../../UI/Text/text';
import ContentWrapp from '../../UI/MainWrapp/ContentWrapp/contentWrapp';
import WorkItem from '../../UI/WorkItem/workItem';
import BlackCircle from '../../UI/Circles/BlackCircle/blackCircle';
import Splatter from '../../UI/Images/Splatter/splatter';
import Box from '../../UI/Box/box';
import ShadowCircle from '../../UI/Circles/BlackCircle/ShadowCircle/shadowCircle';
import FooterBox from '../../UI/Box/FooterBox/footerBox';

import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import Pdf from '../../../assets/Images/Nemanja-Milojevic-Resume.pdf';

//Data
import { WORK_ITEM, EDU_ITEM } from '../../../data/data';

const AboutMe = () => {
  const [styleBox, setStyleBox] = useState({ padding: '3% 8%' });

  function resized() {
    console.log('resized funckija');
    if (window.innerWidth > 768) {
      setStyleBox({ padding: '5% 8%' });
    } else {
      setStyleBox(null);
    }
  }

  useEffect(() => {
    resized();
    window.addEventListener('resize', resized);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainWrap>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          <Header>
            <HandImg />
            <HeaderWrapp>
              <BlackCircle />
              <Splatter />
            </HeaderWrapp>
            <Title>About</Title>
          </Header>
        </motion.div>

        <Box innerStyle={styleBox}>
          <Text size="title">
            <Fade>Who am I? </Fade>
          </Text>
          <Text size="textMain">
            Shortly after graduating from Belgrade University in 2015, I started
            my journey as a front-end developer where I worked on a wide variety
            of interesting and meaningful projects on a daily basis. I value
            creative content structure, clean design patterns, and thoughtful
            interactions. Oh, and I also know how to play Smoke on the water.
          </Text>
          <Fade top delay={260}>
            <div className={classes.btnRow}>
              <a href={Pdf} target="blank">
                View my resume (pdf)
              </a>
            </div>
          </Fade>
        </Box>

        <ContentWrapp type="about">
          {WORK_ITEM.map((el, index) => (
            <WorkItem
              key={index}
              title={el.title}
              company={el.company}
              year={el.year}
              desc={el.desc}
              iconStack={el.iconStack}
              reverse={el.reverse}
            />
          ))}
        </ContentWrapp>

        <ShadowCircle text="Education" />

        <ContentWrapp type="aboutEdu">
          {EDU_ITEM.map((el, index) => (
            <WorkItem
              key={index}
              title={el.title}
              company={el.company}
              year={el.year}
              desc={el.desc}
              hideStack={el.hideStack}
              reverse={el.reverse}
            />
          ))}
        </ContentWrapp>

        <FooterBox type="portfolio" to="portfolio" title="Portfolio" />
      </MainWrap>
    </>
  );
};

export default AboutMe;
