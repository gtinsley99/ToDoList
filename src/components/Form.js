import React from "react";

const InputForm = () => {
  return (
    <div className='inputForm'>
      <form>
        <input
          type="text"
          className="listInput"
          placeholder="Add item here"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default InputForm;
