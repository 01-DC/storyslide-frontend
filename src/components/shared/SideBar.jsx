import React from "react";
import { NavLink } from "react-router-dom";
import temp from "../../assets/Temp.svg";
import saved from "../../assets/Saved.svg";
import home from "../../assets/Home_icon.svg";
import stories from "../../assets/Stories_icon.svg";
import logo from "../../assets/Logo.svg";

const SideBar = () => {
  return (
    <div className="h-full min-h-screen border-r-2">
      <div className="sticky top-0 left-0 pt-2">
        <ul className="space-y-2 px-2">
          <li className="p-2 text-black text-lg font-bold flex items-center gap-2 mb-8">
            <img src={logo} alt="" />
            Storyslide
          </li>
          <li>
            <NavLink
              to="/editor"
              className="bg-ssorange rounded-lg p-2 text-white flex items-center gap-2"
            >
              <img src={stories} alt="" />
              Create Stories
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200"
            >
              <img src={home} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200"
            >
              <img src={saved} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Saved</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className="flex items-center p-2 text-base font-normal rounded-lg hover:bg-gray-200"
            >
              <img src={temp} alt="" />
              <span className="flex-1 ml-3 whitespace-nowrap">Templates</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
