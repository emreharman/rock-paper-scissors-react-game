import React from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";

const Choices = ({ setChoosenIcon, setCompChoice }) => {
  return (
    <div className="choices">
      <h2>YOU</h2>
      <Rock setChoosenIcon={setChoosenIcon} setCompChoice={setCompChoice} />
      <Paper setChoosenIcon={setChoosenIcon} setCompChoice={setCompChoice} />
      <Scissors setChoosenIcon={setChoosenIcon} setCompChoice={setCompChoice} />
    </div>
  );
};

export default Choices;
