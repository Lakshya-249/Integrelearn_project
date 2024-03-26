import React, { useState } from "react";
import image from "../assets/id-badge.png";
import image2 from "../assets/folder.png";
import PropTypes from "prop-types";
import { delschedules } from "../service/schedules";

function Schtemplate(props) {
  const spkey = props.tkey;
  var date = new Date();

  // Get year, month, and day part from the date
  var year = date.toLocaleString("default", { year: "numeric" });
  var month = date.toLocaleString("default", { month: "2-digit" });
  var day = date.toLocaleString("default", { day: "2-digit" });

  // Generate yyyy-mm-dd date string
  var formattedDate = year + "-" + month + "-" + day;
  console.log(formattedDate);
  console.log(formattedDate > props.day);

  const deletetemp = async (mykey) => {
    await delschedules(mykey);
  };
  if (formattedDate > props.day) {
    deletetemp(spkey);
    return;
  }

  return (
    <div className="w-[14rem] h-[14rem] border-2 border-black rounded-2xl flex flex-col cursor-pointer m-2">
      <div className="bg-gray-600 text-white rounded-t-xl h-[4rem]">
        {/* <h5 className="hover:underline">{props.tkey}</h5> */}
        <h6 className="hover:underline">{props.subject}</h6>
        <h5 className="hover:underline">{props.tname}</h5>
      </div>
      <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-red-300 flex flex-col ml-[10rem] -mt-[1rem] text-white justify-center items-center text-3xl font-semibold">
        {props.tname[0]}
      </div>
      <div className="flex flex-row border-b-[1px] border-gray-400 w-full h-[8rem] justify-center">
        {props.desc}
      </div>
      <div className="flex justify-around mt-1">
        <h5 className="w-[7rem] font-[Helvetica Neue] ml-2 mb-1 text-gray-600 font-semibold">
          {props.from + ":00"}-
          {props.to > 12 ? props.to + ":00 pm" : props.to + ":00 am"}
        </h5>
        <h5 className="w-[7rem] font-[Helvetica Neue] ml-2 mb-1 text-gray-600 font-semibold">
          {props.day}
        </h5>
      </div>
    </div>
  );
}

Schtemplate.propTypes = {
  tname: PropTypes.string,
  tkey: PropTypes.string,
  subject: PropTypes.string,
  from: PropTypes.number,
  to: PropTypes.number,
  desc: PropTypes.string,
  day: PropTypes.string,
};
Schtemplate.defaultProps = {
  tname: "Teacher",
  tkey: "random",
  subject: "Subject",
  from: 2,
  to: 5,
  desc: "Hey there Children..",
  day: "2024-03-11",
};

export default Schtemplate;
