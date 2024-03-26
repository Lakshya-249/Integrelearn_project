import React from "react";
import PropTypes from "prop-types";
import { isLoggedIn, logOut } from "../service/auth";
import { useNavigate } from "react-router-dom";

function Template({ name, email, username }) {
  const navigate = useNavigate();
  return (
    <div
      id="userbox"
      className={`w-[13rem] h-[13rem] border-[1px] border-black rounded-md hidden bg-gray-900`}
    >
      <div className="w-full h-[3rem] bg-orange-500 flex justify-center rounded-t-md">
        <div
          className="w-[3rem] h-[3rem] rounded-full bg-blue-900 mt-[1rem] text-3xl 
        text-white flex justify-center items-center"
        >
          {name[0]}
        </div>
      </div>
      <div
        className="w-full h-[8rem] border-b-[1px] border-gray-300
      flex flex-col justify-center font-normal text-white"
      >
        <p>{name}</p>
        <p>{email}</p>
        <p>{username}</p>
      </div>
      <div
        onClick={() => {
          logOut();
          navigate("/");
          window.location.reload();
        }}
        className="font-semibold text-lg text-gray-400 hover:text-orange-400 hover:cursor-pointer"
      >
        LogOut
      </div>
    </div>
  );
}

Template.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string,
};

Template.defaultProps = {
  name: "Lakshya Kumar Singh",
  email: "ayushdnfd1679@gmail.com",
  username: "geeker",
};
export default Template;
