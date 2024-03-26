import React, { useEffect, useState } from "react";
import Dtemplate from "./dtemplates";
import { getDoubts } from "../service/doubts";

function PendingDoubt() {
  const [doubts, setdata] = useState([]);
  useEffect(() => {
    const fetchdoubts = async () => {
      const { data } = await getDoubts();
      setdata(data);
    };
    fetchdoubts();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      {doubts.map((x) => (
        <Dtemplate
          name={x.user.std_username}
          desc={x.doubtdesc}
          seckey={x.doubtId}
        />
      ))}
    </div>
  );
}

export default PendingDoubt;
