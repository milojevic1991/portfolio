import React from "react";
import classes from "./contact.module.css";
import ContactForm from "../../ContactForm/contactForm";

import contactPlane from "../../../assets/Images/contact-image.png";
import splatterAbout from "../../../assets/Images/splatterAbout.png";

const Contact = () => {
  return (
    <div>
      <div className={classes.contact}>
        <div className={classes.contactHeader}>
          <div className={classes.planeImg}>
            <img alt="contactNemanja" src={contactPlane}></img>
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
          <h1>About</h1>
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
