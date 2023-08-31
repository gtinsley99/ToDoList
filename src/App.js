import "./App.css";
import { useState } from "react";

// components
import Header from "./components/Header";
import InputForm from "./components/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [list, setList] = useState(["Cook food", "Clean House"]);

 

const addTask = (inputValue) => {
  let taskList = [...list];
  taskList.push(inputValue);
  setList(taskList);
}

  return (
    <div className="App">
      <Header />
      <InputForm addTask={addTask}/>
      <div className="listCard">
        <ul>
          <ToDoList list={list} />
        </ul>
      </div>
    </div>
  );
};

export default App;
