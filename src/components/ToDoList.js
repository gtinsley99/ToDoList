import React, { useState } from "react";

const ToDoList = (props) => {

  const [complete, setComplete] = useState(false);  

    return (
      <div className="listItem">
        <li className={`listItem-${complete}`}>{props.item}</li>
        <button onClick={() => props.removeTask(props.index)}>X</button>
        <button onClick={() => setComplete(!complete)}>{complete ? "Undo" : "Done"}</button>
      </div>
    );
  };

export default ToDoList;
