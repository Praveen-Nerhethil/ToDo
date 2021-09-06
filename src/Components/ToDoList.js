import React,{useState} from 'react';
import ToDoForm from './toDoForm';

function ToDoList() {
    const [todos,setTodo]=useState([])
    const addToDo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodo(newTodos)
        console.log(todo, ...todos)
    } 

    return (
        <div>
            <h1>What's the plan today..</h1>
            <ToDoForm onSubmit={addToDo}/>
        </div>
    )
}

export default ToDoList
