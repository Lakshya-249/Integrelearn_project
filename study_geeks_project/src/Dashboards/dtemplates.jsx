import React from "react";
import PropTypes from "prop-types";
import { deleteDoubts } from "../service/doubts";

function Dtemplate(props) {
  const mykey = props.seckey;
  console.log(mykey);
  const handleclick = async () => {
    await deleteDoubts(mykey);
    window.location.reload();
  };
  return (
    <div className="w-[80%] border-[1px] bg-orange-400 p-2 text-left rounded-xl mb-3">
      <h1 className="text-white font-semibold text-xl ml-2 mb-2">
        {props.name}
      </h1>
      <div className="bg-white rounded-2xl py-2 px-5 text-gray-500 flex flex-col items-stretch">
        {props.desc}
        <button
          onClick={handleclick}
          className="bg-red-400 p-1.5 text-white font-semibold rounded-xl self-end"
        >
          Resolved
        </button>
      </div>
    </div>
  );
}

Dtemplate.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  seckey: PropTypes.string,
};

Dtemplate.defaultProps = {
  name: "Myname",
  desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitiaprovident reprehenderit laudantium veritatis libero soluta similiquequasi repellendus molestiae minus, magnam voluptas. Beatae eius enimautem eveniet repellat nam velit.",
  seckey: "random",
};

export default Dtemplate;
