import React,{useState} from 'react'

function ToDoForm() {
    const [input,setInput]=useState('')

    return (
        <div>
        <form className='todo-form'>
            <input type='text' value={input} name='text' className="todo-input" placeholder="type something..." />
            <button className='todo-button'>
            Add ToDos
        </button>
        </form>
        
        </div>
    )
}

export default ToDoForm
