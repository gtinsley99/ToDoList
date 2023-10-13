import React, { useState } from "react";

const InputForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue !== ""){
    addTask(inputValue);
    }
    setInputValue("");
  };

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="listInput"
          placeholder="Enter task here ..."
        ></input>
        <button className="AddButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputForm;
