import React, { useState } from "react";
import Ttemplate from "./Ttemplate";
import { register } from "../service/auth";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    date_of_Birth: "",
    stream: "",
    email_id: "",
    std_username: "",
    user_password: "",
    phone_num: 0,
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
    console.log(formData);
    formData.phone_num = Number(formData.phone_num);
    const bool = await register(e, formData);
    if (!bool) return;
    navigate("/student/login");
  };

  const [check, setcheck] = useState(true);
  const handleclick = () => {
    const seeval = document.getElementById("user_password");
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
        Register your new student Account
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
          field={"email_id"}
          func={setData}
        />
        <Ttemplate
          name={"Date of Birth"}
          type={"date"}
          field={"date_of_Birth"}
          func={setData}
        />
        <Ttemplate
          name={"Stream"}
          type={"text"}
          field={"stream"}
          func={setData}
        />
        <Ttemplate
          name={"Phone No."}
          type={"number"}
          field={"phone_num"}
          func={setData}
        />
        <Ttemplate
          name={"Username"}
          type={"text"}
          field={"std_username"}
          func={setData}
        />
        <Ttemplate
          name={"Password"}
          type={"password"}
          field={"user_password"}
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

export default StudentRegister;
