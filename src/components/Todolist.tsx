import React from 'react'
import "./style.css"
import { Todo } from '../models';
import SingleTodo from './SingleTodo';


interface props {
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Todolist:React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
        {todos.map((todo)=>(
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))}
    </div>
  )
}

export default Todolist