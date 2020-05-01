import React from 'react';
import classes from './colorBox.module.css';

const ColorBox = ({ fontFam, colors }) => {
  const fonts = { fontFamily: fontFam };
  const spanColors = colors.map((el, index) => {
    return <span key={index} style={{ backgroundColor: el }}></span>;
  });
  return (
    <>
      {/* Font and colors section */}
      <div className={classes.fontsColorsSection}>
        <h1>Font & colors</h1>

        <div className={classes.fontsColorsWrapper}>
          <div className={classes.fontsColorsLeft}>
            <h5 style={fonts}>{fontFam}</h5>
            <p style={fonts}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p style={fonts}>abcdefghijklmnopqrstuvwxyz</p>
            <p style={fonts}>1234567890</p>
          </div>

          <div className={classes.fontsColorsRight}>
            {spanColors}

            {/* <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorBox;
