import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import Header from '../../UI/Header/header';
import Title from '../../UI/Text/Title/title.js';
import HandImg from '../../UI/Images/HandImg/handImg';
import HeaderWrapp from '../../UI/Header/HeaderWrapp/headerWrapp';
import Text from '../../UI/Text/text';
import ContentWrapp from '../../UI/MainWrapp/ContentWrapp/contentWrapp';

import WorkItem from '../../UI/WorkItem/workItem';

import classes from './aboutMe.module.css';

import splatterPurple from '../../../assets/Images/splatter1.png';
import Pdf from '../../../assets/Images/pdf.pdf';
import Button from '../../UI/Button/button';

import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import ImageFadeIn from 'react-image-fade-in';
import BlackCircle from '../../UI/Circles/BlackCircle/blackCircle';
import Splatter from '../../UI/Images/Splatter/splatter';
import Box from '../../UI/Box/box';
import ShadowCircle from '../../UI/Circles/BlackCircle/ShadowCircle/shadowCircle';
import FooterBox from '../../UI/Box/FooterBox/footerBox';

const AboutMe = () => {
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

        <Box>
          <Text size="title">Ćao, ja sam Nemanja.</Text>
          <Text size="textMain">
            Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </Text>
          <div className={classes.btnRow}>
            <a href={Pdf} target="blank">
              Resume
            </a>
          </div>
        </Box>

        <ContentWrapp type="about">
          <WorkItem
            reverse={false}
            title="Lead Front-End Developer"
            company="Neka firma"
            year="1222"
            desc="fasfsfsanhfuasuhnfj sahnf sab fsba fsbaf "
            iconStack={1}
          />

          <WorkItem
            reverse={true}
            title="proba"
            company="Neka firma"
            year="1222"
            desc="fasfsfsanhfuasuhnfj sahnf sab fsba fsbaf "
            // hideStack={true}
          />

          <WorkItem
            reverse={false}
            title="Lead Front-End Developer"
            company="Neka firma"
            year="1222"
            desc="fasfsfsanhfuasuhnfj sahnf sab fsba fsbaf "
            iconStack={1}
          />
        </ContentWrapp>
        <ShadowCircle text="Education" />

        <ContentWrapp type="aboutEdu">
          <WorkItem
            reverse={false}
            title="Lead Front-End Developer"
            company="Neka firma"
            year="1222"
            desc="fasfsfsanhfuasuhnfj sahnf sab fsba fsbaf "
            iconStack={1}
          />

          <WorkItem
            reverse={true}
            title="proba"
            company="Neka firma"
            year="1222"
            desc="fasfsfsanhfuasuhnfj sahnf sab fsba fsbaf "
            // hideStack={true}
          />
        </ContentWrapp>

        <FooterBox type="portfolio" to="portfolio" title="Portfolio" />
      </MainWrap>
    </>
  );
};

export default AboutMe;
