import React, { useState, useEffect, useRef } from 'react';
import classes from './portfolio.module.css';
import { motion } from 'framer-motion';
import Fade from 'react-reveal/Fade';
import mainScreenPortfolio from '../../../assets/Images/CodeSymphonyBigScreen.png';

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
import WebsiteLink from '../../UI/WebsiteLink/websiteLink';
import WebsiteItem from '../../UI/WebsiteItem/websiteItem';
import PortfolioCard from '../../PortfolioCard/portfolioCard';
import ShadowCircle from '../../UI/Circles/BlackCircle/ShadowCircle/shadowCircle';
import Showcase from '../../Showcase/showcase';

//Data
import {
  APP_ITEM,
  WEBSITE_ITEM,
  LINK_ITEM,
  WEB_ITEM,
} from '../../../data/data';

const Portfolio = () => {
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [webItemsDisplayed, setwebItemsDisplayed] = useState([WEB_ITEM[0]]);

  const linkClickHandler = (elId) => {
    setActiveLink(elId);

    const websiteArr = WEB_ITEM.filter((webId) => webId.id === elId);
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

        <Fade>
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
            </Text>
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

          {WEBSITE_ITEM.map((el, index) => (
            <PortfolioCard
              key={index}
              reverse={el.reverse}
              title={el.title}
              desc={el.desc}
              image={el.image}
              displayLink={el.displayLink}
              workLink={el.workLink}
              showColorBox={el.showColorBox}
              color={el.colors}
              fontFam={el.fontFam}
            />
          ))}

          <Showcase>
            <Text size={'boldTitle'}>. . . and more</Text>
            <WebsiteLink
              linksState={LINK_ITEM}
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
