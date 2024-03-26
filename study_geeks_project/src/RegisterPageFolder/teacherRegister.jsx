import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Ttemplate from "./Ttemplate";
import { isLoggedIn, register } from "../service/auth";

function TeacherRegister() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date_of_birth: "",
    qualification: "",
    joining_date: "",
    email: "",
    t_password: "",
    experience: 0,
    subject: "",
  });

  const setData = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
    let flag = true;
    for (let data in formData) {
      if (formData[data] == "") {
        const txtfield = document.getElementById(`${data}`);
        txtfield.value = "*field cannot be left blank*!!";
        txtfield.style.color = "red";
        flag = false;
      }
    }
    if (!flag) return;
    const bool = await register(e, formData);
    console.log(bool);
    if (!bool) return;
    else navigate("/teacher/login");
  };

  const [check, setcheck] = useState(true);
  const handleclick = () => {
    const seeval = document.getElementById("t_password");
    setcheck(!check);
    if (check) {
      seeval.type = "text";
    } else seeval.type = "password";
  };

  return (
    <div
      className="w-[100%] h-[40rem] bg-gradient-to-br from-[#fdcdb1]
     to-[#fce1d2] rounded-3xl flex justify-center pl-12 py-10 flex-col"
    >
      <h1 className="text-6xl font-bold leading-tight tracking-tight text-white text-left">
        Register your new teacher Account
      </h1>
      <div
        className="flex flex-col w-[80rem] h-[32rem] rounded-xl 
      justify-start px-[1.5rem] text-left flex-wrap"
      >
        <Ttemplate
          name={"Firstname"}
          type={"text"}
          field={"firstname"}
          func={setData}
        />
        <Ttemplate
          name={"Lastname"}
          type={"text"}
          field={"lastname"}
          func={setData}
        />
        <Ttemplate
          name={"Email"}
          type={"email"}
          field={"email"}
          func={setData}
        />
        <Ttemplate
          name={"Date of Birth"}
          type={"date"}
          field={"date_of_birth"}
          func={setData}
        />
        <Ttemplate
          name={"Qualification"}
          type={"text"}
          field={"qualification"}
          func={setData}
        />
        <Ttemplate
          name={"Experience"}
          type={"number"}
          field={"experience"}
          func={setData}
        />
        <Ttemplate
          name={"Joining Date"}
          type={"date"}
          field={"joining_date"}
          func={setData}
        />
        <Ttemplate
          name={"Subject"}
          type={"text"}
          field={"subject"}
          func={setData}
        />
        <Ttemplate
          name={"Password"}
          type={"password"}
          field={"t_password"}
          func={setData}
        />
        <div className="flex items-center justify-between w-[7.5rem] h-[2rem] ml-1">
          <input
            id="checkbox"
            aria-describedby="remember"
            type="checkbox"
            onClick={() => {
              handleclick();
            }}
            className="w-4 h-4 border-gray-200 rounded bg-gray-50"
          ></input>
          <label htmlFor="remember" className="text-white">
            See Password
          </label>
        </div>
        <div className="mt-1">
          {/* <NavLink to={isLoggedIn ? "teacher/login" : "teacher/register"}>
            <input
              type="submit"
              value="Sign up"
              onClick={(e) => {
                handleregister(e);
              }}
              className="w-[35rem] text-white bg-[#bd395a] hover:bg-[#ae546a] hover:cursor-pointer 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            />
          </NavLink> */}
          <input
            type="submit"
            value="Sign up"
            onClick={(e) => {
              handleregister(e);
            }}
            className="w-[35rem] text-white bg-[#bd395a] hover:bg-[#ae546a] hover:cursor-pointer 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          />
        </div>
      </div>
    </div>
  );
}

export default TeacherRegister;
