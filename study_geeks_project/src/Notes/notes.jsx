import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Notes() {
  return (
    <div
      className="w-full h-[40rem] bg-gradient-to-br from-[#e69262]
    to-[#fce1d2] rounded-3xl flex items-center flex-col"
    >
      <div className="w-full flex justify-around border-b-2 border-b-white text-semibold text-white">
        <NavLink to="/notes/maths">
          <div className="px-[6rem] py-5 rounded-tl-3xl bg-[#bd395a] hover:bg-[#843449]">
            Maths
          </div>
        </NavLink>
        <NavLink to="/notes/physics">
          <div className="px-[7rem] py-5 border-x-2 bg-[#bd395a] border-x-white hover:bg-[#843449]">
            Physics
          </div>
        </NavLink>
        <NavLink to="/notes/chemistry">
          <div className="px-[6rem] py-5 rounded-tr-3xl bg-[#bd395a] hover:bg-[#843449]">
            Chemistry
          </div>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Notes;
