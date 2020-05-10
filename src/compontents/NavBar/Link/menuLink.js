import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './menuLink.module.css';

const MenuLink = ({ ex, to, children, style, type = 'text', click }) => {
  return (
    <NavLink
      onClick={type !== 'text' && type !== 'image' ? () => click() : null}
      style={style}
      exact={ex}
      className={
        type === 'image'
          ? classes.logo
          : type === 'mobile'
          ? classes.menuLinkMobile
          : classes.menuLink
      }
      activeClassName={classes.menuLinkActive}
      to={`/${to}`}
    >
      {children}
    </NavLink>
  );
};

export default MenuLink;
