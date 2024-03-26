import React from "react";
import PropTypes from "prop-types";

function Ttemplate(props) {
  return (
    <div className="my-2">
      <p className="block text-xl font-medium text-white">{props.name}</p>
      <input
        type={props.type}
        id={props.field}
        onChange={(e) => props.func(e, props.field)}
        onClick={(e) => {
          e.target.value = "";
          e.target.style.color = "black";
        }}
        placeholder={`Write your ${props.name}`}
        className="border text-gray-900 text-sm rounded-lg w-[35rem]
           block p-2.5 bg-gray-300 opacity-65 focus:border-blue-400 focus:outline-none placeholder:text-white"
      />
    </div>
  );
}

Ttemplate.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  field: PropTypes.string,
  func: PropTypes.func.isRequired,
};

export default Ttemplate;
