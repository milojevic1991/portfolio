import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navBar.module.css';
import nLogo from '../../assets/Images/nemanja-logo4.png';

const NavBar = () => {
  const [openMenuClass, setOpenMenuClass] = useState(
    classes.mainNavMobileClose
  );

  const openMenuHandler = () => {
    setOpenMenuClass(classes.mainNavMobileOpen);
    console.log('klik meni');
  };

  const closeMenuHandler = () => {
    setOpenMenuClass(classes.mainNavMobileClose);
    console.log('klik meni');
  };

  return (
    <>
      <nav className={classes.mainNav}>
        {/* <div className ={classes.profileImg} /> */}

        {/* <div className={classes.logo}> */}
        <NavLink
          exact
          className={classes.logo}
          // activeClassName={classes.menuLinkActive}
          to="/"
        >
          <img alt="logo" src={nLogo}></img>
        </NavLink>
        {/* </div> */}
        <div className={classes.menuItems}>
          <NavLink
            exact
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
            to="/about"
          >
            About me
          </NavLink>
          <NavLink
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className={classes.menuLink}
            activeClassName={classes.menuLinkActive}
            to="/idemo"
          >
            About me
          </NavLink>
        </div>
        {/* <div className={classes.footerName}>
          <a href="/">
            <i class="lab la-linkedin-in"></i>
          </a>
          <a href="/">
            <i class="lab la-github"></i>
          </a>c
        </div> */}
      </nav>

      <div onClick={openMenuHandler} className={classes.menuBtn}>
        <div className={[classes.menuBar, classes.first].join(' ')}></div>
        <div className={[classes.menuBar, classes.second].join(' ')}></div>
        <div className={[classes.menuBar, classes.third].join(' ')}></div>
      </div>

      <nav className={openMenuClass}>
        {/* <div className ={classes.profileImg} /> */}

        <div onClick={closeMenuHandler} className={classes.menuBtnClose}>
          <div className={[classes.menuBar, classes.first].join(' ')}></div>
          <div className={[classes.menuBar, classes.second].join(' ')}></div>
          <div className={[classes.menuBar, classes.third].join(' ')}></div>
        </div>

        <div className={classes.menuItemsActive}>
          <NavLink
            onClick={closeMenuHandler}
            className={classes.menuLinkMobile}
            to="/"
          >
            About me
          </NavLink>
          <NavLink
            onClick={closeMenuHandler}
            className={classes.menuLinkMobile}
            to="/about"
          >
            About me
          </NavLink>
          <NavLink
            onClick={closeMenuHandler}
            className={classes.menuLinkMobile}
            to="/idemo"
          >
            About me
          </NavLink>
          <NavLink
            onClick={closeMenuHandler}
            className={classes.menuLinkMobile}
            to="/idemo"
          >
            About me
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
