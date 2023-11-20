import React from "react";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { showSidebar, toggleSideBar } = useDashboardContext();
  return (
    <>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={isBigSidebar ? null : toggleSideBar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavLinks;
