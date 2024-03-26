import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Physics() {
  return (
    <>
      <div className="w-full flex justify-around border-b-2 border-b-white text-semibold text-white">
        <NavLink to="11th">
          <div className="px-[10.5rem] py-2 hover:bg-[#fdcdb1] hover:text-black border-r-2 border-r-white">
            11th
          </div>
        </NavLink>
        <NavLink to="12th">
          <div className="px-[10.7rem] py-2 hover:bg-[#fdcdb1] hover:text-black">
            12th
          </div>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default Physics;
