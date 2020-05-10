import React, { useState, useEffect } from 'react';
import classes from './navBar.module.css';
import nLogo from '../../assets/Images/nemanja-logo4.png';
import MenuLink from '../../compontents/NavBar/Link/menuLink';

import { MENU_ITEMS } from '../../data/data';

const NavBar = () => {
  const [openMenuClass, setOpenMenuClass] = useState(
    classes.mainNavMobileClose
  );

  const openMenuHandler = () => {
    setOpenMenuClass(classes.mainNavMobileOpen);
  };

  const closeMenuHandler = () => {
    setOpenMenuClass(classes.mainNavMobileClose);
    console.log('cao');
  };

  return (
    <>
      <nav className={classes.mainNav}>
        {/* <NavLink exact className={classes.logo} to="/"></NavLink> */}
        <MenuLink ex={true} to={''} type={'image'}>
          <img alt="logo" src={nLogo}></img>
        </MenuLink>

        <div className={classes.menuItems}>
          {MENU_ITEMS.map((el, index) => (
            <MenuLink key={index} ex={el.ex} to={el.to}>
              {el.text}
            </MenuLink>
          ))}
        </div>
      </nav>

      <div onClick={openMenuHandler} className={classes.menuBtn}>
        <div className={[classes.menuBar, classes.first].join(' ')}></div>
        <div className={[classes.menuBar, classes.second].join(' ')}></div>
        <div className={[classes.menuBar, classes.third].join(' ')}></div>
      </div>

      <nav className={openMenuClass}>
        <div onClick={closeMenuHandler} className={classes.menuBtnClose}>
          <div className={[classes.menuBar, classes.first].join(' ')}></div>
          <div className={[classes.menuBar, classes.second].join(' ')}></div>
          <div className={[classes.menuBar, classes.third].join(' ')}></div>
        </div>

        <div className={classes.menuItemsActive}>
          {MENU_ITEMS.map((el, index) => (
            <MenuLink
              click={closeMenuHandler}
              key={index}
              ex={el.ex}
              to={el.to}
              type={'mobile'}
            >
              {el.text}
            </MenuLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
