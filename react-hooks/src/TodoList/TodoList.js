import React, { useState } from 'react'
import './style.css'
function TodoList() {
    
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState('')

    const handleChangeInput = (event)=>{
        setTask(event.target.value)
    }
    const handleSubmit = event=>{
        if(task!==''){
        setTodos(todos.concat({id:todos.length, task:task}));
        }
        setTask('')
        event.preventDefault();
    }

  return (
    <div className='card'>
        <h2>TodoList</h2>
        <form className='user-input' onSubmit={handleSubmit}>
        <input type='text' value={task} onChange={handleChangeInput}></input>
        <button type='submit'>Add Todo</button>
        </form>
        <h3>Your todolist</h3>
        <ul>
            {todos.map(todo=>{
                return <li key={todo.id}>{todo.task}</li>
            })}
        </ul>
    </div>
  )
}

export default TodoList