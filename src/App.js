import "./App.css";
import { useState } from "react";

// components
import Header from "./components/Header";
import InputForm from "./components/Form";
import ToDoList from "./components/ToDoList";

const App = () => {
  const [list, setList] = useState([
    {content: "Cook food", complete: false},
    {content: "Clean House", complete: false}
  ]);

  // const addHandler = () => {
  //   let storedList = [...list];
  //   storedList.push(nextItem);
  //   listInput = "";
  //   setList(storedList);
  // };

  return (
    <div className="App">
      <Header />
      <InputForm />
      <div className="listCard">
        <ul>
          <ToDoList list={list} />
        </ul>
      </div>
    </div>
  );
};

export default App;
