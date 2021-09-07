import React from "react";
import ToDoForm from "./Components/toDoForm";
import ToDoList from "./Components/ToDoList";
import "./App.css";


function App() {
  return (
    <div className="toDoApp">
       <ToDoList/>
    </div>
  );
}

export default App;
