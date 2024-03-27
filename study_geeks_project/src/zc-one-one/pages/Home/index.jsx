/* eslint-disable no-unused-vars */
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const handlePhysicsClick = () => {
    navigate("/physics");
  };

  const handleChemistryClick = () => {
    navigate("/chemistry");
  };

  const handleMathsClick = () => {
    navigate("/mathematics");
  };

  return (
    <div>
      <h1>Welcome to the Learning Platform!</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinRoom}>Join</button>
      <div>
        <h2>Explore Subjects</h2>
        <ul>
          <li onClick={handlePhysicsClick}>Physics</li>
          <li onClick={handleChemistryClick}>Chemistry</li>
          <li onClick={handleMathsClick}>Mathematics</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
