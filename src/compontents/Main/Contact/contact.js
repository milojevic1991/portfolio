import React, { useEffect } from 'react';
import classes from './contact.module.css';
import ContactForm from '../../ContactForm/contactForm';

import ImageFadeIn from 'react-image-fade-in';
import contactPlane from '../../../assets/Images/contact-image.png';
import splatterAbout from '../../../assets/Images/splatterAbout.png';

import { motion } from 'framer-motion';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={classes.contact}>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
          }}
        >
          <div className={classes.contactHeader}>
            <div className={classes.planeImg}>
              <ImageFadeIn
                alt="contactNemanja"
                opacityTransition={1}
                src={contactPlane}
              />
            </div>

            <div className={classes.headerTitle}>
              <div className={classes.smallDarkCircle}> </div>
              {/* <div className={classes.smallDarkCircleFixed}> </div> */}
              <img
                alt="contactImg"
                className={classes.splatterImg}
                src={splatterAbout}
              ></img>
            </div>
            <h1>Contact</h1>
          </div>
        </motion.div>

        <div className={classes.contactText}>
          <h2>Get in touch</h2>
          <p>
            Have a question or want to work together? Let's chat.{' '}
            <a href="n.milojevic1991@gmail.com" target="_blank">
              n.milojevic1991@gmail.com
            </a>
            <br />
            Or float me a note bellow.
          </p>
        </div>

        <div className={classes.contactForm}>
          <div className={classes.contactFormWrapper}>
            {/* <form>
              <div className={classes.contactFormInfo}>
                <div className={classes.contactFormLeft}>
                  <h3>Label</h3>
                  <input type="text" placeholder="What's your name?" />
                </div>
                <div className={classes.contactFormRight}>
                  <h3>Label</h3>
                  <input type="text" placeholder="What's your name?" />
                </div>
              </div>

              <div className={classes.contactFormMsg}>
                <h3>Message</h3>
                <textarea
                  className={classes.contactFormTextArea}
                  placeholder="I bet its something interesting"
                ></textarea>
              </div>
              <input type="submit" value="Send message" />
            </form> */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
