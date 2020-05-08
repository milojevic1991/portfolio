import React, { useEffect } from 'react';
import classes from './contact.module.css';
import ContactForm from '../../ContactForm/contactForm';

import ImageFadeIn from 'react-image-fade-in';
import contactPlane from '../../../assets/Images/contact-image.png';
import splatterAbout from '../../../assets/Images/splatterAbout.png';

// imported components
import MainWrap from '../../UI/MainWrapp/mainWrapp';
import PlaneImg from '../../UI/Images/PlaneImg/planeImg';

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

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
        <Header style={{ marginBottom: '8%', width: 'auto' }}>
          <PlaneImg />

          <HeaderWrapp>
            <BlackCircle />
            <Splatter />
          </HeaderWrapp>
          <Title>Contact</Title>
        </Header>
      </motion.div>

      <div className={classes.contactText}>
        <Text size={'title'}>Get in touch</Text>

        <Text size={'textMain'}>
          Have a question or want to work together? Let's chat -{' '}
          <a href="n.milojevic1991@gmail.com" target="_blank">
            n.milojevic1991@gmail.com
          </a>
          <br />
          Or float me a note :
        </Text>
      </div>

      <ContactForm />
    </MainWrap>
  );
};

export default Contact;
