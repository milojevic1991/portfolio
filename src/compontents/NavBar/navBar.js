import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './navBar.module.css';

const navBar = () => {
   return (
    <>
    <nav className ={classes.mainNav}>
         {/* <div className ={classes.profileImg} /> */}
        
        <div className={classes.menuItems} >

         
            <NavLink className={classes.menuLink} to="/about">About me</NavLink>
            <NavLink className={classes.menuLink} to="/about">About me</NavLink>
            <NavLink className={classes.menuLink} to="/idemo">About me</NavLink>
            <NavLink className={classes.menuLink} to="/idemo">About me</NavLink>
         
          
        
        </div>
        <div className={classes.footerName} >
        <p>@Nemanja Milojević</p>
        </div>
      </nav>
      </>
   );
};

export default navBar;