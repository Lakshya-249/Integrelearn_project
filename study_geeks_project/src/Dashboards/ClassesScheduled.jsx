import React, { useState, useEffect } from "react";
import Tschedule from "../SchedulesFolder/tschedule";
import { schedules } from "../service/schedules";
import Schtemplate from "../SchedulesFolder/schtemplate";

function ClassesScheduled() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await schedules();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Tschedule />
      <div className="flex flex-wrap w-[70%] mt-10 justify-center">
        {data.map((x) => (
          <Schtemplate
            tname={x.tname}
            tkey={x.sch_id}
            subject={x.subject}
            from={x.startTime}
            to={x.endTime}
            desc={x.description}
            day={x.day}
          />
        ))}
      </div>
    </>
  );
}

export default ClassesScheduled;
