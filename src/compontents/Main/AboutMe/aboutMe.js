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
              {/* <div className={classes.headerTitle}> */}
              {/* <div className={classes.smallDarkCircleAbout}> </div> */}
              <BlackCircle />
              <Splatter />
              {/* <img
                alt=""
                className={classes.splatterImg}
                src={splatterAbout}
              ></img> */}
              {/* </div> */}
            </HeaderWrapp>

            <Title>About</Title>
            {/* </div> */}
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

        {/* <div className={classes.aboutMeResume}> */}
        {/* <div className={classes.aboutMeResumeBox}>
            <h2>Ćao, ja sam Nemanja.</h2>

            <p>
              Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s
            </p>
            <div className={classes.btnRow}>
              <a href={Pdf} target="blank">
                Resume
              </a>
            </div>
          </div> */}

        {/* <div className={classes.aboutMeWorkWrapper}> */}
        <ContentWrapp type="about">
          <div className={classes.aboutMeWorkItem}>
            <div
              className={classes.aboutMeWorkItemCircle}
              style={{ animationDelay: '1s' }}
            ></div>

            <Fade bottom>
              <h1 className={classes.aboutMeWorkTitle}>
                Lead Front-End Developer
              </h1>
            </Fade>
            <div className={classes.aboutMeWorkTitleSecond}>
              <h1>Raking</h1>
              <h5>2018-Present</h5>
            </div>
            <div className={classes.aboutMeWorkTech}>
              <span>
                <i className="lab la-js-square"></i>
              </span>
              <span>
                <i class="lab la-react"></i>
              </span>
              <span>
                <i class="lab la-css3"></i>
              </span>
              <span>
                <i class="lab la-html5"></i>
              </span>
              <span>
                <i class="lab la-sass"></i>
              </span>
              <span>
                <i class="lab la-github"></i>
              </span>
              <span>
                <i class="lab la-wordpress-simple"></i>
              </span>
              <span>
                <i class="lab la-npm"></i>
              </span>
            </div>

            <p>
              Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>

          <div
            className={classes.aboutMeWorkItem}
            style={{ alignItems: 'flex-end' }}
          >
            <div
              className={classes.aboutMeWorkItemCircle}
              style={{ animationDelay: '2s' }}
            ></div>
            <Fade bottom>
              <h1 className={classes.aboutMeWorkTitle}>
                Lead Front-End Developer
              </h1>
            </Fade>

            <div
              style={{ textAlign: 'right' }}
              className={classes.aboutMeWorkTitleSecond}
            >
              <h1>Raking</h1>
              <h5>2018-Present</h5>
            </div>
            <div className={classes.aboutMeWorkTech}>
              <span>
                <i class="lab la-react"></i>
              </span>
              <span>
                <i class="lab la-js-square"></i>
              </span>
              <span>
                <i class="lab la-html5"></i>
              </span>
              <span>
                <i class="lab la-css3"></i>
              </span>
              <span>
                <i class="lab la-bootstrap"></i>
              </span>
              <span>
                <i class="lab la-github"></i>
              </span>
              <span>
                <i class="lab la-wordpress-simple"></i>
              </span>
              <span>
                <i class="lab la-node-js"></i>
              </span>
            </div>

            <p style={{ textAlign: 'right' }}>
              Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>

          <div className={classes.aboutMeWorkItem}>
            <div
              className={classes.aboutMeWorkItemCircle}
              style={{ animationDelay: '3s' }}
            ></div>
            <Fade bottom>
              <h1 className={classes.aboutMeWorkTitle}>
                Lead Front-End Developer
              </h1>
            </Fade>

            <div className={classes.aboutMeWorkTitleSecond}>
              <h1>Raking</h1>
              <h5>2018-Present</h5>
            </div>
            <div className={classes.aboutMeWorkTech}>
              <span>
                <i class="lab la-js-square"></i>
              </span>

              <span>
                <i class="lab la-css3"></i>
              </span>
              <span>
                <i class="lab la-html5"></i>
              </span>
              <span>
                <i class="lab la-sass"></i>
              </span>

              <span>
                <i class="lab la-wordpress-simple"></i>
              </span>
              <span>
                <i class="lab la-adobe"></i>
              </span>
            </div>

            <p>
              Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s.
            </p>
          </div>

          <Fade bottom>
            <div className={classes.aboutMeEduCircleWrap}>
              <div className={classes.aboutMeEduBlackCircle}>
                <div className={classes.aboutMeEduPurpleCircle}></div>

                <div className={classes.aboutMeEduCircleImg}>
                  <img src={splatterPurple}></img>
                </div>
                <h1>Neki tekst ovde.</h1>
              </div>
            </div>
          </Fade>
        </ContentWrapp>
        {/* </div> */}
        {/* </div> */}
        <div className={classes.aboutMeResume} style={{ marginTop: '-30%' }}>
          <div className={classes.aboutMeWorkWrapperEdu}>
            <div className={classes.aboutMeWorkItem} style={{ top: '180px' }}>
              <div
                className={classes.aboutMeWorkItemCircle}
                style={{ animationDelay: '4s' }}
              ></div>
              <Fade bottom>
                <h1 className={classes.aboutMeWorkTitle}>
                  Lead Front-End Developer
                </h1>
              </Fade>

              <div className={classes.aboutMeWorkTitleSecond}>
                <h1>Raking</h1>
                <h5>2018-Present</h5>
              </div>

              <p>
                Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>

            <div
              className={classes.aboutMeWorkItem}
              style={{ alignItems: 'flex-end', top: '180px' }}
            >
              <div
                className={classes.aboutMeWorkItemCircle}
                style={{ animationDelay: '2s' }}
              ></div>
              <Fade bottom>
                <h1 className={classes.aboutMeWorkTitle}>
                  Lead Front-End Developer
                </h1>
              </Fade>

              <div
                style={{ textAlign: 'right' }}
                className={classes.aboutMeWorkTitleSecond}
              >
                <h1>Raking</h1>
                <h5>2018-Present</h5>
              </div>

              <p style={{ textAlign: 'right' }}>
                Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </div>
        </div>
        <Fade bottom>
          <div className={classes.checkPortfolio}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </div>
        </Fade>
      </MainWrap>
    </>
  );
};

export default AboutMe;
