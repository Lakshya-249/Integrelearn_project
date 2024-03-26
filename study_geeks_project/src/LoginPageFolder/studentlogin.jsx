import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../service/auth";

function Studentlogin() {
  const [logindetails, setdetails] = useState({ username: "", password: "" });
  const setData = (e, field) => {
    let data = e.target.value;
    setdetails({ ...logindetails, [field]: data });
  };
  const navigate = useNavigate();
  const handlelogin = async (e) => {
    e.preventDefault();
    if (logindetails.username.trim() == "") {
      const alt = document.getElementById("uid");
      alt.value = "*field cannot be left blank*!!";
      alt.style.color = "red";
      return;
    }
    if (logindetails.password.trim() == "") {
      const alt = document.getElementById("upass");
      alt.value = "*field cannot be left blank*!!";
      alt.style.color = "red";
      return;
    }
    const bool = await login(e, logindetails);
    if (!bool) {
      return;
    }
    navigate("/studentdash");
    window.location.reload();
  };
  const [check, setcheck] = useState(true);
  const handleclick = () => {
    const seeval = document.getElementById("upass");
    setcheck(!check);
    if (check) {
      seeval.type = "text";
    } else seeval.type = "password";
  };
  return (
    <div className="w-[87rem] h-[40rem] bg-gradient-to-br from-[#fdcdb1] to-[#fce1d2] rounded-3xl flex justify-center p-10">
      <div className="flex justify-between items-center w-[80rem] h-[32rem]">
        <div className="w-[35rem] h-full flex justify-center items-center">
          <div className="flex flex-col w-[32rem] h-full items-center rounded-xl justify-start px-[1.5rem] py-[1.5rem]">
            <div
              action=""
              className="text-left w-full h-full flex flex-col justify-around px-3"
            >
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white">
                Sign in to your account
              </h1>
              <p className="block text-xl font-medium text-white">
                Your username
              </p>
              <input
                type="text"
                name="username"
                id="uid"
                value={logindetails.username}
                onChange={(e) => {
                  setData(e, "username");
                }}
                placeholder="student#234"
                className="border text-gray-900 text-sm rounded-lg
           block w-full p-2.5 bg-gray-300 opacity-65 focus:border-blue-400 focus:outline-none placeholder:text-white"
              />
              <p className="block text-xl font-medium text-white">Password</p>
              <input
                type="password"
                name="password"
                id="upass"
                value={logindetails.password}
                onChange={(e) => {
                  setData(e, "password");
                }}
                placeholder="••••••••"
                className="border text-gray-900 text-sm rounded-lg
            block w-full p-2.5 bg-gray-300 opacity-65 focus:border-blue-400 focus:outline-none placeholder:text-white"
              />
              <div className="flex items-center justify-between w-[7.5rem] h-[2rem]">
                <input
                  id="checkbox"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border-gray-200 rounded bg-gray-50"
                  onClick={(e) => {
                    handleclick();
                  }}
                ></input>
                <label htmlFor="remember" className="text-white">
                  See Password
                </label>
              </div>
              <input
                type="submit"
                value="Sign in"
                onClick={(e) => {
                  handlelogin(e);
                }}
                className="w-full text-white bg-[#bd395a] hover:bg-[#ae546a] hover:cursor-pointer mt-3
                  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              />
            </div>
            <p className="text-medium font-light text-gray-500 dark:text-gray-400 pt-2">
              Don’t have an account yet?{" "}
              <NavLink
                to="/student/register"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </div>

        <div className="w-[35rem] h-[30rem] bg-[url('./assets/study2.avif')] bg-contain rounded-2xl"></div>
      </div>
    </div>
  );
}

export default Studentlogin;
