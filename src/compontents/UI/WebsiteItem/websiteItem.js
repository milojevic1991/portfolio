import React from 'react';
import classes from './websiteItem.module.css';

const WebsiteItem = ({ webItemState }) => {
  console.log('remnder');
  return (
    <>
      <div className={classes.webItemWrapp}>
        {webItemState.map((el, index) => {
          return (
            <>
              <div key={index} className={classes.webItemImageCircle}></div>

              <div className={classes.webItemImageSection}>
                <a href={el.link} className={classes.websiteItemLink}>
                  View Work
                </a>
                <div className={classes.webItemImage}>
                  <img key={index} alt="" src={el.img}></img>{' '}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default WebsiteItem;
