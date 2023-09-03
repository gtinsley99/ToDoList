import "./App.css";
import React, { useState } from "react";

// components
import Header from "./components/Header";
import InputForm from "./components/Form";
import ToDoList from "./components/ToDoList";
import Archive from "./components/Archive";

const App = () => {
  const [list, setList] = useState([]);

  const [archive, setArchive] = useState([]);

  const removeTask = (index) => {
    let taskList = [...list];
    taskList.splice(index, 1);
    setList(taskList);
  };

  const addTask = (inputValue) => {
    let taskList = [...list];
    taskList.push(inputValue);
    setList(taskList);
  };

  const archiveTask = (index) => {
    let archiveList = [...archive];
    let listAdd = [list[index]];
    archiveList.push(listAdd);
    setArchive(archiveList);
      removeTask(index);
  };

  const unarchiveTask = (index) => {
    let taskList = [...list];
    let listAdd = [archive[index]];
    taskList.push(listAdd);
    setList(taskList);
    removeArchiveTask(index);
  }

  const removeArchiveTask = (index) => {
    let archiveList = [...archive];
    archiveList.splice(index, 1);
    setArchive(archiveList);
  }

  return (
    <div className="App">
      <div className="pattern">
        <Header />
        <InputForm addTask={addTask} />
        <div className="listCard">
          <ul>
            {list.map((list, index) => {
              return (
                <ToDoList
                  key={index}
                  item={list}
                  removeTask={() => removeTask(index)}
                  archiveTask={() => archiveTask(index)}
                />
              );
            })}
          </ul>
        </div>
        <div className="archive">
          <h2>{archive.length === 0 ? "" : "Archive"}</h2>
          <ul>
            {archive.map((archive, index) => {
              return <Archive key={index} item={archive} removeArchiveTask={() => removeArchiveTask(index)} unarchiveTask={() => unarchiveTask(index)} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
