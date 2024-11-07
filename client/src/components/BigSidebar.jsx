import React from 'react';
import Wrapper from '../assets/wrappers/BigSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import Logo from './Logo';

const BigSidebar = () => {
    const { showSideBar, toggleSideBar} = useDashboardContext();
  return (
        <Wrapper>
      <div className= { showSideBar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSideBar/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
