import React from "react";

const Archive = (props) => {
  return (
    <div className="listItem">
      <li className="archiveItem">{props.item}</li>
      <button
        className="setButtons"
        onClick={() => props.unarchiveTask(props.index)}
      >
        Unarchive
      </button>
      <button
        className="setButtons"
        onClick={() => props.removeArchiveTask(props.index)}
      >
        Delete
      </button>
    </div>
  );
};

export default Archive;
