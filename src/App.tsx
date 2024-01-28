import React,{FC, useState,ChangeEvent} from 'react'
import "./App.css";
import {ITask} from './interface'

const  App : FC=()=> {
  const [task,setTask] = useState<string>("")
  const [deadline,setDeadline] = useState<number>(0)
  const [todoList,setTodoList] = useState<ITask[]>([]);
  const hangleChange = (e: ChangeEvent<HTMLInputElement>) : void=>{
    if(e.target.value === "task") {
      setTask(e.target.value)
    }else {
      setDeadline(Number(e.target.value))
    }
  }
  const addTask = ()=>{
    const newTask = {taskName : task, deadline : deadline};
    setTodoList([...todoList, newTask])
    console.log(todoList)
  }
  return (
    <div className='App'>
      <div className='header'>
        <div className='inputcontainer'>
        <input type='text' name='task' placeholder='Task..' onChange={hangleChange}/>
        <input type='number' name='deadline' placeholder='Deadline (in Days)'onChange={hangleChange}/>
        </div>
        <button onClick={addTask}> Add to Task</button>
      </div>
    </div>
  )
}

export default App
