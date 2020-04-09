import React from 'react';
import classes from './websiteLink.module.css';

const WebsiteLink = ({linksState,linkClick,activeItem}) => {
   return (
      <div className={classes.websiteLinkWrapper}> 
         {linksState.map((el) => {
           return (
           <h1 onClick={()=>linkClick(el.id) }
            className={activeItem===el.id ? classes.active : classes.linkItem}> {el.name} </h1>
           )
         })}
      </div>
   );
};

export default WebsiteLink;