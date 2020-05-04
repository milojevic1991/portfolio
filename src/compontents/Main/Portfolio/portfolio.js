import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './portfolio.module.css';
import WebsiteLink from '../../UI/WebsiteLink/websiteLink';
import WebsiteItem from '../../UI/WebsiteItem/websiteItem';

import handPhoto from '../../../assets/Images/handAboutRight.png';
import splatterAbout from '../../../assets/Images/splatterAbout.png';
import mainScreenPortfolio from '../../../assets/Images/portfolioBoxScreen.png';
import exampleImg from '../../../assets/Images/valeyo-device.png';
import splatterPurple from '../../../assets/Images/splatter1.png';
import WebScreen from '../../../assets/Images/webScreen.png';

import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import ImageFadeIn from 'react-image-fade-in';

import PortfolioCard from '../../PortfolioCard/portfolioCard';
import ColorBox from '../../ColorBox/colorBox';

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState(0);

  const myRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [linkItem, setLinkItem] = useState([
    {
      id: 0,
      name: 'Zgodna žena',
    },
    {
      id: 1,
      name: 'Fit kutak',
    },
    {
      id: 2,
      name: 'Šiš ćevaš',
    },

    {
      id: 3,
      name: 'cetiri',
    },

    {
      id: 4,
      name: 'Pet',
    },

    {
      id: 5,
      name: 'Sest',
    },

    {
      id: 7,
      name: 'Sedam',
    },
  ]);

  const [webItemsDisplayed, setwebItemsDisplayed] = useState([
    {
      id: 0,
      name: 'Neki naslov tamo vamo',
      img: WebScreen,
    },
  ]);

  const [webItems, setWebItem] = useState([
    {
      id: 0,
      name: 'Neki naslov tamo vamo',
      img: WebScreen,
    },
    {
      id: 1,
      name: 'DRugi naslov ',
    },
    {
      id: 2,
      name: 'Nesto sesto sasvim ',
    },
  ]);

  const linkClickHandler = (elId) => {
    setActiveLink(elId);

    const websiteArr = webItems.filter((webId) => webId.id === elId);
    setwebItemsDisplayed(websiteArr);
  };

  return (
    <>
      <div className={classes.portfolio}>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          <div ref={myRef} className={classes.portfolioHeader}>
            <div className={classes.handImg}>
              <ImageFadeIn alt="" opacityTransition={0.5} src={handPhoto} />
              {/* <img src={handPhoto}></img> */}
            </div>
            <div className={classes.headerTitle}>
              <div className={classes.smallDarkCircle}> </div>
              {/* <div className={classes.smallDarkCircleFixed}> </div> */}
              <img
                className={classes.splatterImg}
                src={splatterAbout}
                alt=""
              ></img>
            </div>
            <h1>Portfolio</h1>
          </div>
        </motion.div>

        <div className={classes.portfolioMain}>
          <Fade bottom>
            <div className={classes.portfolioMainBox}>
              <div className={classes.mainScreenPortfolio}>
                <img alt="" src={mainScreenPortfolio}></img>
              </div>
              <h2>Ćao, ja sam Nemanja.</h2>
              <p>
                Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </div>
          </Fade>

          {/*  portfolio section APP */}
          <div className={classes.portfolioItemWrapper}>
            <PortfolioCard
              // reverse={true}
              title="componenta"
              desc="Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s"
              image={exampleImg}
              displayLink={false}
            />

            <PortfolioCard
              reverse={true}
              title="componenta"
              desc="Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s"
              image={exampleImg}
              displayLink={false}
            />

            <PortfolioCard
              // reverse={true}
              title="componenta"
              desc="Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s"
              image={exampleImg}
              displayLink={false}
            />

            <PortfolioCard
              reverse={true}
              title="componenta"
              desc="Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s"
              image={exampleImg}
              displayLink={false}
            />

            {/* WEBSITE circle section APP */}

            <div className={classes.portfolioEduCircle}>
              <Fade bottom>
                <div className={classes.portfolioDarkCircle}>
                  <div className={classes.portfolioSmallCircle}></div>
                  <div className={classes.portfolioSmallCircleImg}>
                    <img src={splatterPurple}></img>
                  </div>

                  <h1>Websites</h1>
                </div>
              </Fade>
            </div>

            <PortfolioCard
              // reverse={true}
              title="componenta"
              desc="Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s"
              image={exampleImg}
              displayLink={true}
            />

            <ColorBox
              colors={['#fff', '#fff', '#fff', '#fff', '#fff', '#fff']}
              fontFam="Poppins"
            />

            <div className={classes.websiteTabsWrapper}>
              <h1 className={classes.websiteTabsWrapperTitle}>
                . . . more work
              </h1>
              <WebsiteLink
                linksState={linkItem}
                linkClick={linkClickHandler}
                activeItem={activeLink}
              />

              <WebsiteItem webItemState={webItemsDisplayed} />
            </div>

            <div className={classes.checkContact}>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
