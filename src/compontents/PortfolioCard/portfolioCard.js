import React from 'react';
import classes from './portfolioCard.module.css';
import ImageFadeIn from 'react-image-fade-in';
import Fade from 'react-reveal/Fade';

const PortfolioCard = ({
  image,
  title,
  desc,
  workLink,
  displayLink = true,
  reverse = false,
}) => {
  const reverseRow = reverse ? { flexDirection: 'row-reverse' } : null;
  const imageRowReverse = reverse ? { right: '0px', left: 'unset' } : null;
  const mainItemReverse = reverse ? { textAlign: 'left' } : null;

  const itemDescReverse = reverse
    ? { paddingLeft: '0', paddingRight: '15%' }
    : null;

  return (
    <>
      {/* First portfolio section APP */}
      <div className={classes.portfolioItem} style={reverseRow}>
        {/* left section */}
        <div className={classes.portfolioItemImageSection}>
          <div className={classes.portfolioItemImage}>
            <ImageFadeIn alt="" opacityTransition={0.5} src={image} />

            {/* <img src={exampleImg}></img> */}
          </div>

          <div
            className={classes.portfolioItemImageCircle}
            style={imageRowReverse}
          ></div>
        </div>

        {/* right section */}
        <div className={classes.portfolioItemDesc} style={mainItemReverse}>
          <Fade bottom>
            <h1 className={classes.portfolioItemTitle}>{title}</h1>
          </Fade>

          <p style={itemDescReverse}>{desc}</p>
          {displayLink ? (
            <a className={classes.portfolioItemTitleLink} href={workLink}>
              View Work
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
