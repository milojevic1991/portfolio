import React from "react";
import classes from "./websiteItem.module.css";

const WebsiteItem = ({ webItemState }) => {
  return (
    <>
      <div className={classes.webItemWrapp}>
      {webItemState.map((el) => {
          return (
             <>
            <div className={classes.webItemImageCircle}> 
            </div>
             <div className={classes.webItemImageSection}>
            <a href={el.linkTo}>View Work</a>
             <div className={classes.webItemImage}>
               <img src={el.img}></img>
             </div>
           </div>
           </>

          )
        })}

      </div>
       

        
      
    </>
  );
};

export default WebsiteItem;
