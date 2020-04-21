import React, { useEffect } from 'react';
import classes from './aboutMe.module.css';
import handPhoto from '../../../assets/Images/handAbout.png';
import splatterAbout from '../../../assets/Images/splatterAbout.png';
import splatterPurple from '../../../assets/Images/splatter1.png';
import { motion } from 'framer-motion';

import LazyLoad from 'react-lazy-load';

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        initial={{ scaleX: 0.9, x: -300, y: 0 }}
        animate={{ scaleX: 1, x: 0, y: 0 }}
        exit={{ opacity: 1, x: -300, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 14,
        }}
      >
        <div>
          <div className={classes.aboutMe}>
            <div className={classes.aboutMeHeader}>
              <div className={classes.handImg}>
                <LazyLoad
                  width={100}
                  height={100}
                  debounce={false}
                  offsetVertical={500}
                >
                  <img alt="" src={handPhoto}></img>
                </LazyLoad>
              </div>
              <div className={classes.headerTitle}>
                <div className={classes.smallDarkCircle}> </div>
                <img
                  alt=""
                  className={classes.splatterImg}
                  src={splatterAbout}
                ></img>
              </div>
              <h1>About</h1>
            </div>

            <div className={classes.aboutMeResume}>
              <div className={classes.aboutMeResumeBox}>
                <h2>Ćao, ja sam Nemanja.</h2>
                <p>
                  Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </div>
              <div className={classes.aboutMeWorkWrapper}>
                <div className={classes.aboutMeWorkItem}>
                  <div className={classes.aboutMeWorkItemCircle}></div>
                  <h1 className={classes.aboutMeWorkTitle}>
                    Lead Front-End Developer
                  </h1>

                  <div className={classes.aboutMeWorkTitleSecond}>
                    <h1>Raking</h1>
                    <h5>2018-Present</h5>
                  </div>
                  <div className={classes.aboutMeWorkTech}>
                    <span>
                      <i class="lab la-js-square"></i>
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
                      <i class="lab la-figma"></i>
                    </span>
                  </div>

                  <p>
                    Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>

                <div
                  className={classes.aboutMeWorkItem}
                  style={{ alignItems: 'flex-end' }}
                >
                  <div className={classes.aboutMeWorkItemCircle}></div>
                  <h1 className={classes.aboutMeWorkTitle}>
                    Lead Front-End Developer
                  </h1>

                  <div
                    style={{ textAlign: 'right' }}
                    className={classes.aboutMeWorkTitleSecond}
                  >
                    <h1>Raking</h1>
                    <h5>2018-Present</h5>
                  </div>
                  <div className={classes.aboutMeWorkTech}>
                    <span>
                      <i class="lab la-js-square"></i>
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
                      <i class="lab la-figma"></i>
                    </span>
                  </div>

                  <p style={{ textAlign: 'right' }}>
                    Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>

                <div className={classes.aboutMeWorkItem}>
                  <div className={classes.aboutMeWorkItemCircle}></div>
                  <h1 className={classes.aboutMeWorkTitle}>
                    Lead Front-End Developer
                  </h1>

                  <div className={classes.aboutMeWorkTitleSecond}>
                    <h1>Raking</h1>
                    <h5>2018-Present</h5>
                  </div>
                  <div className={classes.aboutMeWorkTech}>
                    <span>
                      <i class="lab la-js-square"></i>
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
                      <i class="lab la-figma"></i>
                    </span>
                  </div>

                  <p>
                    Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>

                <div className={classes.aboutMeEduCircleWrap}>
                  <div className={classes.aboutMeEduBlackCircle}>
                    <div className={classes.aboutMeEduPurpleCircle}></div>

                    <div className={classes.aboutMeEduCircleImg}>
                      <img src={splatterPurple}></img>
                    </div>
                    <h1>Neki tekst ovde.</h1>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={classes.aboutMeResume}
              style={{ marginTop: '-30%' }}
            >
              <div className={classes.aboutMeWorkWrapperEdu}>
                <div
                  className={classes.aboutMeWorkItem}
                  style={{ top: '180px' }}
                >
                  <div className={classes.aboutMeWorkItemCircle}></div>
                  <h1 className={classes.aboutMeWorkTitle}>
                    Lead Front-End Developer
                  </h1>

                  <div className={classes.aboutMeWorkTitleSecond}>
                    <h1>Raking</h1>
                    <h5>2018-Present</h5>
                  </div>
                  <div className={classes.aboutMeWorkTech}>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                  </div>

                  <p>
                    Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>

                <div
                  className={classes.aboutMeWorkItem}
                  style={{ alignItems: 'flex-end', top: '180px' }}
                >
                  <div className={classes.aboutMeWorkItemCircle}></div>
                  <h1 className={classes.aboutMeWorkTitle}>
                    Lead Front-End Developer
                  </h1>

                  <div
                    style={{ textAlign: 'right' }}
                    className={classes.aboutMeWorkTitleSecond}
                  >
                    <h1>Raking</h1>
                    <h5>2018-Present</h5>
                  </div>
                  <div className={classes.aboutMeWorkTech}>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                    <span>Jedan</span>
                  </div>

                  <p style={{ textAlign: 'right' }}>
                    Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.checkPortfolio}>
              <a href="/">Portfolio</a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
