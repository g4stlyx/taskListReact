import { useState } from 'react'
import './App.css'
import TaskCreate from "./components/TaskCreate"
import TaskList from "./components/TaskList"

function App() {

  const [tasks,setTasks] = useState([])
  const createTask = (title,taskDesc)=>{
    const createdTasks = [
      ...tasks,{
        id:Math.round(Math.random()*99999999),
        title,
        taskDesc
      }
    ]
    setTasks(createdTasks)
  }

  const deleteTaskById = (id)=>{
    const afterDeleteTasks = tasks.filter((task)=>{
      return task.id!=id;
    })
    setTasks(afterDeleteTasks)
  }

  const updateTaskById = (id,updatedTitle,updatedTaskDesc)=>{
    const updatedTasks = tasks.map((task)=>{
      if(task.id===id){
        return {id,title:updatedTitle,taskDesc:updatedTaskDesc}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div className="app">
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={updateTaskById} />
    </div>
  )
}

export default App
