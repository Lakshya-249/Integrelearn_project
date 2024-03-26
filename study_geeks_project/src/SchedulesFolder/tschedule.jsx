import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getEmail } from "../service/auth";
import { addschedules } from "../service/schedules";

function Tschedule() {
  const [details, setdetails] = useState({
    user: getEmail(),
    sch_id: "",
    day: "",
    startTime: "",
    endTime: "",
    description: "",
  });

  const setData = (e, field) => {
    let value = e.target.value;
    setdetails({ ...details, [field]: value });
  };

  const addingSchedule = () => {
    addschedules({ ...details, sch_id: uuidv4() });
    window.location.reload();
  };
  return (
    <div className="flex justify-around w-[70%] mt-5">
      <button
        className="bg-blue-600 px-2 rounded-2xl text-white font-semibold"
        onClick={addingSchedule}
      >
        Add Schedule
      </button>
      <input
        type="text"
        id="descr"
        className=" flex-grow mx-2 pl-5 rounded-2xl py-3"
        placeholder="Description Of the class"
        value={details.description}
        onChange={(e) => {
          setData(e, "description");
        }}
      />
      <input
        type="number"
        id="from"
        className="mx-2 w-[6%] pl-1.5 rounded-2xl"
        min={1}
        max={23}
        placeholder="from"
        value={details.startTime}
        onChange={(e) => {
          setData(e, "startTime");
        }}
      />
      <input
        type="number"
        id="to"
        className="mx-2 w-[5%] text-center rounded-2xl"
        min={1}
        max={23}
        placeholder="to"
        value={details.endTime}
        onChange={(e) => {
          setData(e, "endTime");
        }}
      />
      <input
        type="date"
        id="schdate"
        className="mx-2 text-center rounded-2xl"
        value={details.day}
        onChange={(e) => {
          setData(e, "day");
        }}
      />
    </div>
  );
}

export default Tschedule;
