import React from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = ({isBigSideBar}) => {
    const {toggleSideBar, user} = useDashboardContext();
  return (
    <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} className="nav-link" key={text} onClick={ isBigSideBar ? null : toggleSideBar} end>
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
  )
}

export default NavLinks
