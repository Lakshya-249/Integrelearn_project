import React, { useEffect, useState } from "react";
import image from "../assets/mylogo.png";
import { Link, NavLink } from "react-router-dom";
import { getEmail, getName, getUser, isLoggedIn } from "../service/auth";
import Template from "./template";

function Header() {
  const [isLogged, setIsLoggedIn] = useState(false);
  const name = getName();
  const email = getEmail();
  const username = getUser();

  // Function to check if the user is logged in based on the token
  const checkLoginStatus = () => {
    const isAuthenticated = isLoggedIn();
    setIsLoggedIn(isAuthenticated);
  };

  const userlogo = () => {
    document.getElementById("userbox").classList.toggle("hidden");
  };

  // Check login status on component mount
  useEffect(() => {
    checkLoginStatus();
    console.log(isLogged);
  }, []);
  return (
    <div
      className={`h-[8rem] bg-[#cad3e1] -mt-[4rem] flex justify-around items-center ${
        isLogged ? "rounded-none" : "rounded-full"
      } mb-5 w-[100%]`}
    >
      <div className="mt-[3rem] -ml-[8rem]">
        {/* <Dashboard /> */}
        {/* <StudentDashboard1 /> */}
        <NavLink to={isLogged ? "/studentdash" : "/"}>
          <img
            src={image}
            alt="logo"
            className="w-[15.3rem] h-[4.5rem] rounded-full m-2"
          />
        </NavLink>
      </div>
      <div className="flex justify-around w-[20rem] mt-[5rem]">
        <NavLink
          to={isLogged ? "/studentdash" : "/"}
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-400"
            } font-semibold hover:text-black`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-400"
            } font-semibold hover:text-black`
          }
        >
          Courses
        </NavLink>
        <NavLink
          to="/notes"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-400"
            } font-semibold hover:text-black`
          }
        >
          Notes
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-400"
            } font-semibold hover:text-black`
          }
        >
          Team
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-400"
            } font-semibold hover:text-black`
          }
        >
          About
        </NavLink>
      </div>
      <div className="flex flex-col items-center -mr-[8rem] z-50 mt-[14rem] h-[21rem]">
        <div
          onClick={() => {
            userlogo();
          }}
          className={`w-[3.3rem] h-[3.3rem] rounded-full bg-blue-900 mt-[4rem] cursor-pointer mb-1 text-white text-2xl
         ${isLogged ? "flex" : "hidden"} items-center justify-center`}
        >
          {getName()[0].toUpperCase()}
        </div>
        <Template name={name} email={email} username={username} />
      </div>
    </div>
  );
}

export default Header;
