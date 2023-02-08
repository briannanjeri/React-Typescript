import React from 'react'
import "./style.css"

interface props{
  todo:string
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e:React.FormEvent)=>void;
}

const InputField:React.FC<props> = ({ todo, setTodo, handleAdd}) => {
  console.log(todo)
  return (
    <form className='input' onSubmit={handleAdd}>
        <input type="input" placeholder='enter a task' className='input_box'
        value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField