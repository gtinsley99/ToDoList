import React, { useState } from "react";

const ToDoList = (props) => {

  const [complete, setComplete] = useState(false);  

    return (
      <div className="listItem">
        <li className={`listItem-${complete}`}>{props.item}</li>
        <button className="setButtons" onClick={() => props.removeTask(props.index)}>Remove</button>
        <button className="setButtons" onClick={() => setComplete(!complete)}>{complete ? "Undo" : "Completed"}</button>
      </div>
    );
  };

export default ToDoList;
