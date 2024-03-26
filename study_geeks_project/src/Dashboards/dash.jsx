import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faCalendarAlt,
  faAward,
  faGraduationCap,
  faTimes,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Outlet } from "react-router-dom";
import ChatPage from "./ChatPage";

function Dash() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex h-full w-screen">
      {/* open button */}
      {!isOpen && (
        <button
          className="absolute top-2.5 left-5 z-10 bg-[#EABE6C] text-white px-4 py-2 rounded-md shadow-md"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}

      {/* Sliding menu */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        {isOpen && (
          <button
            className="absolute top-5 right-5 z-10 bg-[#EABE6C] text-white px-4 py-2 rounded-md shadow-md"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}

        {/* Menu items */}
        <ul className="p-4 mt-16">
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <span>
              <NavLink to="/studentdash/overview">Dashboard</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            <span>
              <NavLink to="/studentdash/classschedule">Schedule</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faAward} className="mr-2" />
            <span>
              <NavLink to="/studentdash/evaluation">Achievement</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
            <span>
              <NavLink to="/studentdash/education">Education</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span>
              <NavLink to="/studentdash/pendingdbt">Pending Doubt</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span>
              <NavLink to="/studentdash/progress">Progress</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span>
              <NavLink to="/studentdash/resources">Resources</NavLink>
            </span>
          </li>
          <li className="py-2 flex items-center cursor-pointer">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            <span>
              <NavLink to="/studentdash/profile">Profile</NavLink>
            </span>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div
        className={`flex flex-col justify-start items-center h-full ${
          isOpen ? "ml-56" : ""
        } w-full bg-gray-100 text-gray-800 font-sans rounded-r-[.5rem]`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl mb-4">Welcome to Your Dashboard!</h2>
        </div>
        <Outlet />
      </div>
      <ChatPage />
    </div>
  );
}

export default Dash;
