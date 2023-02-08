import React, { useRef, useState , useEffect } from 'react'
import { Todo } from '../models'
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import {MdDone} from "react-icons/md"
import "./style.css"

type props={
    todo:Todo;
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
};

const SingleTodo= ({todo, todos, setTodos}:props) => {

    const [edit, setEdit]=useState<boolean>(false)
    const [editTodo, setEditTodo]=useState<string>(todo.todo)


    function handleDone(id:number){
       setTodos(todos.map((todo)=>
       todo.id===id?{...todo, isdone:!todo.isdone }:todo ))
    }
 
    const handleDelete=(id:number)=>{
         setTodos(todos.filter((todo)=>todo.id!==id ))
     }


     const handleEdit=(e:React.FormEvent, id:number)=>{
        e.preventDefault()
        setTodos(todos.map((todo)=>(
            todo.id===id? {...todo, todo:editTodo }:(todo
            )
        )        
        ));
        setEdit(false)

     }
    
     const inputRef=useRef<HTMLInputElement>(null)
     
     useEffect(()=>{
        inputRef.current?.focus();
     }, [edit])


  return (
    <form className='todos_single' onSubmit={(e)=>handleEdit(e, todo.id)}>

    { 

        edit ? (
        <input ref={inputRef} value={editTodo} onChange= {(e)=>setEditTodo( e.target.value)} className="todos_single--text" />
        ):todo.isdone?(
            <s className="todos_single_text">  { todo.todo }</s>
      
        ):(
            <span className="todos_single_text">
            { todo.todo }
            </span>
        )
        
     }


    <div>
        <span className="icon">
            <AiFillEdit  onClick={()=>  { 
                if(!edit && !todo.isdone){
                    setEdit(!edit)
                }}}/>
        </span>
        <span className="icon" onClick={()=>handleDelete(todo.id)}>
        <AiFillDelete/>

        </span>
        <span className="icon" onClick={()=>handleDone(todo.id)}>
        <MdDone/>

        </span>

       </div>

    </form>
  )
}

export default SingleTodo