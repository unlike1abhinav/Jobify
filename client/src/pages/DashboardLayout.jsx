import React, { createContext, useContext, useState } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSideBar } from "../components";

const DashboardContext = createContext();

const DashboardLayout = ({isDarkThemeEnabled}) => {
  const user = { name: "John" };
  const [showSideBar, setShowSideBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme);
    localStorage.setItem('darkTheme', newTheme)
  };

  const toggleSideBar = () => {
    setShowSideBar((currentSideBar) => !currentSideBar);
  };

  const logoutUser = async () => {
    console.log("User");
  };

  return (
    <DashboardContext.Provider value={{ user, showSideBar, isDarkTheme, toggleDarkTheme, toggleSideBar, logoutUser}}>
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext)

export default DashboardLayout;
