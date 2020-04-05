import React from "react";
import classes from "./portfolio.module.css";

import handPhoto from "../../../assets/Images/handAboutRight.png";
import splatterAbout from "../../../assets/Images/splatterAbout.png";
import mainScreenPortfolio from "../../../assets/Images/portfolioBoxScreen.png";

const Portfolio = () => {
  return (
    <>
      <div>
        <div className={classes.portfolio}>
          <div className={classes.portfolioHeader}>
            <div className={classes.handImg}>
              <img src={handPhoto}></img>
            </div>
            <div className={classes.headerTitle}>
              <div className={classes.smallDarkCircle}> </div>
              <img className={classes.splatterImg} src={splatterAbout}></img>
            </div>
            <h1>About</h1>
          </div>

          <div className={classes.portfolioMain}>
            <div className={classes.portfolioMainBox}>
              <div className={classes.mainScreenPortfolio}>
                <img src={mainScreenPortfolio}></img>
              </div>
              <h2>Ćao, ja sam Nemanja.</h2>
              <p>
                Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </p>
            </div>

               {/* First portfolio section APP */}  
            <div className={classes.portfolioItemWrapper}>
            <div className={classes.portfolioItem}>
              {/* left section */}
              <div className={classes.portfolioItemImageSection}>
                <div className={classes.portfolioItemImage}>
                  <img src="/"></img>
                </div>
                <div className={classes.portfolioItemImageCircle}> </div>
              </div>

              {/* right section */}
              <div className={classes.portfolioItemDesc}>
                <h1 className={classes.portfolioItemTitle}>XoranConnect</h1>

                <p>
                  XoranConnect is web-based service designed to complement
                  MiniCAT. The service provides online viewing, off-site
                  archival and backup of images, and easy access for both
                  physician and patient
                </p>
                <a
                  className={classes.portfolioItemTitleLink}
                  href="londonborn.html#top"
                >
                  View Work
                </a>
              </div>
            </div>
         
               {/* Font and colors section */}
               <div className={classes.portfolioItemDescFonts}>
                   <h1>Font & colors</h1>
                   <h5>Raleway</h5>
                     <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                     <p>abcdefghijklmnopqrstuvwxyz</p>
                     <p>123456789</p>
                     <div className={classes.portfolioItemDescBoxColor} >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                </div>           
         </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
