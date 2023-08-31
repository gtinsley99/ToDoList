import React from "react";

const ToDoList = ({list}) => {
    return(
        list.map((item, index) => {
            return (
              <li key={index} className="listItem">
                {item}
              </li>
            );
          })
    )
} 

export default ToDoList;