import React,{useState} from 'react';
import ToDoForm from './toDoForm';
import ToDo  from './toDo'

function ToDoList() {
    const [todos,setTodos]=useState([])
    const addToDo=todo=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        console.log(todo, ...todos)
    } 
    const updateTodo =(todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id===todoId ? newValue : item)))
    }

    const removeTodo=id=>{
        const removeArr=[...todos].filter(todo =>todo.id !== id);
        setTodos(removeArr)
    }
    const completeToDo = id =>{
        let updatedTodos = todos.map(todo=>{
            if(todo.id===id) {
                todo.isComplete =!todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>What's the plan today..</h1>
            <ToDoForm onSubmit={addToDo}/>
            <ToDo todos={todos} completeToDo={completeToDo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>

    )
}

export default ToDoList;
