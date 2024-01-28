import React,{FC, useState} from 'react'
import "./App.css";
const  App : FC=()=> {
  const [task,setTask] = useState<string>("")
  const [deadline,setDeadline] = useState<number>(0)
  const [task,setTask] = useState([]);

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputcontainer'>
        <input type='text' placeholder='Task..'/>
        <input type='number' placeholder='Deadline (in Days)'/>
        </div>
        <button> Add to Task</button>
      </div>
    </div>
  )
}

export default App
