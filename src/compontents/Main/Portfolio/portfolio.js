import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './portfolio.module.css';
import WebsiteLink from '../../UI/WebsiteLink/websiteLink';
import WebsiteItem from '../../UI/WebsiteItem/websiteItem';

import handPhoto from '../../../assets/Images/handAboutRight.png';
import splatterAbout from '../../../assets/Images/splatterAbout.png';
import mainScreenPortfolio from '../../../assets/Images/CodeSymphonyBigScreen.png';
import exampleImg from '../../../assets/Images/valeyo-device.png';
import splatterPurple from '../../../assets/Images/splatter1.png';
import WebScreen from '../../../assets/Images/webScreen.png';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import Header from '../../UI/Header/header';
import HandImg from '../../UI/Images/HandImg/handImg';

import HeaderWrapp from '../../UI/Header/HeaderWrapp/headerWrapp';
import Text from '../../UI/Text/text';
import Title from '../../UI/Text/Title/title.js';
import ContentWrapp from '../../UI/MainWrapp/ContentWrapp/contentWrapp';
import BlackCircle from '../../UI/Circles/BlackCircle/blackCircle';
import Splatter from '../../UI/Images/Splatter/splatter';
import Box from '../../UI/Box/box';
import FooterBox from '../../UI/Box/FooterBox/footerBox';

import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import ImageFadeIn from 'react-image-fade-in';

import PortfolioCard from '../../PortfolioCard/portfolioCard';
import ColorBox from '../../ColorBox/colorBox';
import ShadowCircle from '../../UI/Circles/BlackCircle/ShadowCircle/shadowCircle';
import Showcase from '../../Showcase/showcase';

import { APP_ITEM } from '../../../data/data';

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
      <MainWrap>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          <Header style={{ marginBottom: '20%' }}>
            <HandImg right={true} />
            <HeaderWrapp>
              <BlackCircle />
              <Splatter />
            </HeaderWrapp>
            <Title>Portfolio</Title>
          </Header>
        </motion.div>

        <Fade top>
          <Box>
            <img
              className={classes.mainScreenPortfolio}
              alt="portfolio"
              src={mainScreenPortfolio}
            ></img>
            <Text size="title">Some things I've built</Text>
            <Text size="textMain">
              Here are a few projects I've worked on recently. From UI libraries
              and CMS(WordPress) / Gatsby / Next.js websites to good ol'
              JavaScript and React / Redux applications.
              {/* From UI
              templates/UX designs, SPA React applications, and Next.js/Gatsby
              websites to full-stack experience with open source CMS like
              (WordPress, Drupal). */}
            </Text>
            <div className={classes.btnRow}>
              {/* <a href={Pdf} target="blank">
              Resume
            </a> */}
            </div>
          </Box>
        </Fade>

        <ContentWrapp>
          {APP_ITEM.map((el, index) => (
            <PortfolioCard
              key={index}
              reverse={el.reverse}
              title={el.title}
              desc={el.desc}
              image={el.image}
              displayLink={el.displayLink}
              workLink={el.workLink}
            />
          ))}

          <ShadowCircle text="Websites" />

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
            colors={['#fff', 'blue', 'yellow', 'pink', 'black', '#fff']}
            fontFam="Arial"
          />

          <Showcase>
            <Text size={'boldTitle'}>. . . and more</Text>
            <WebsiteLink
              linksState={linkItem}
              linkClick={linkClickHandler}
              activeItem={activeLink}
            />

            <WebsiteItem webItemState={webItemsDisplayed} />
          </Showcase>

          <FooterBox type="contact" to="contact" title="Contact" />
        </ContentWrapp>
      </MainWrap>
    </>
  );
};

export default Portfolio;
