import React, { useState } from "react";

const InputForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="listInput"
          placeholder="Enter task here ..."
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
