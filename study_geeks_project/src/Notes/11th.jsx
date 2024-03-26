import React, { useState } from "react";
import MyApp from "./pdfviewr";
// import { readfiles } from "../service/filename";
import Header from "../BasicComponent/header";

function temp() {
  return;
}

function Eth() {
  const [fileNames, setFileNames] = useState([]);
  const [error, setError] = useState("");
  const currentPath = window.location.pathname;
  const [dirname, setdirname] = useState("");

  const handledir = (val) => {
    setdirname(val);
    document.getElementById("pdfbox").classList.toggle("hidden");
  };

  const directorypath =
    "C:/Users/ayush/OneDrive/Desktop/Clg_project/study_geeks_project/src/uploads/" +
    currentPath.split("/notes/")[1];
  const fetchFileNames = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/api/files?directory=" + directorypath
      );
      if (!response.ok) {
        throw new Error("Error fetching file names");
      }
      const data = await response.json();
      setFileNames(data.files);
      setError("");
    } catch (error) {
      setError("Error fetching file names");
    }
  };
  const newpath =
    "../" +
    directorypath.split(
      "C:/Users/ayush/OneDrive/Desktop/Clg_project/study_geeks_project/src/"
    )[1] +
    "/";
  return (
    <div className="w-full flex flex-col h-[35rem]">
      <button onClick={fetchFileNames} className="w-full py-1 bg-[#ae546a]">
        Show Notes
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {fileNames.map((fileName, index) => (
          <li
            key={index}
            className="bg-gray-400 border-b-2 text-white hover:cursor-pointer m-3 rounded-xl h-[17%]"
            onClick={() => handledir(fileName)}
          >
            {fileName}
          </li>
        ))}
      </ul>
      <MyApp pdfPath={newpath + dirname} />
      {console.log(newpath + dirname)}
    </div>
  );
}

export default Eth;
