import "./App.css";
import React, { useState } from "react";

// components
import Header from "./components/Header";
import InputForm from "./components/Form";
import ToDoList from "./components/ToDoList";

const App = () => {

  const [list, setList] = useState([]);

  const removeTask = (index) => {
    let taskList = [...list];
    taskList.splice(index, 1);
    setList(taskList);
  }
 

const addTask = (inputValue) => {
  let taskList = [...list];
  taskList.push(inputValue);
  setList(taskList);
}

  return (
    <div className="App">
      <Header />
      <InputForm addTask={addTask} />
      <div className="listCard">
        <ul>
        {list.map((list, index) => {
          return <ToDoList key={index} removeTask={() => removeTask(index)} item={list} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
