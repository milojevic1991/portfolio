import React from "react";
import classes from "./websiteItem.module.css";

const WebsiteItem = ({ webItemState }) => {
  return (
    <>
      <div className={classes.webItemWrapp}>
      {webItemState.map((el) => {
          return (
             <>
            <div className={classes.webItemImageCircle}> </div>
             <h1>{el.name}</h1>
             <div className={classes.webItemImageSection}>
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
