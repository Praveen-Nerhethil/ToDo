import React,{useState} from 'react'

function ToDoForm(props) {
    const [input,setInput]=useState('')

    const handleChange=e=>{
        setInput(e.target.value)
    }

    const handleSubmit=e=>{
        e.preventDefault();
    
    // props.onSubmit({
    //     id: Math.floor(Math.random()*1000),
    //     text: input
    // });
        setInput('');
    };
    return (
        <div>
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type='text' value={input} name='text' onChange={handleChange} className="todo-input" placeholder="type something..." />
            <button className='todo-button'>
            Add ToDos
        </button>
        </form>
        
        </div>
    )
}

export default ToDoForm
