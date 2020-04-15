import React from "react";
import classes from "./contact.module.css";

import contactPlane from '../../../assets/Images/contact-image.png';
import splatterAbout from "../../../assets/Images/splatterAbout.png";
const Contact = () => {
  return (
    <div>
      <div className={classes.contact}>
        <div className={classes.contactHeader}>
          <div className={classes.planeImg}>
            <img src={contactPlane}></img>
          </div>

          <div className={classes.headerTitle}>
              <div className={classes.smallDarkCircle}> </div>
              {/* <div className={classes.smallDarkCircleFixed}> </div> */}
              <img className={classes.splatterImg} src={splatterAbout}></img>
            </div>
            <h1>About</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
