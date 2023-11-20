import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, SmallSidebar, BigSidebar } from "../components";
import { checkDefaultTheme } from "../App";
const DashboardContext = createContext();

const DashboardLayout = () => {
  const user = { name: "Omer" };
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
    console.log(newDarkTheme);
  };

  const toggleSideBar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    console.log("logout user");
  };
  return (
    <>
      <DashboardContext.Provider
        value={{
          user,
          showSidebar,
          isDarkTheme,
          logoutUser,
          toggleSideBar,
          toggleDarkTheme,
        }}
      >
        <Wrapper>
          <main className="dashboard">
            <SmallSidebar />
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
    </>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
