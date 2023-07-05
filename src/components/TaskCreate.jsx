import { useState } from "react";

function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {
  
  const [title,setTitle] = useState(task ? task.title : "")
  const [taskDesc,setTaskDesc] = useState(task ? task.taskDesc : "")

  const handleTitleChange = (event)=>{
    setTitle(event.target.value)
  }
  
  const handleTaskChange = (event)=>{
    setTaskDesc(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();

    if(taskFormUpdate){
      onUpdate(task.id,title,taskDesc)
    }
    else{
      onCreate(title,taskDesc)
    }

    setTitle('')
    setTaskDesc('')
  }
  
  if(taskFormUpdate){
    return(
      <div className="task-item">
        <div className="task-update">
          <h3>Update the task:</h3><br/>
          <form className="inputForm">
            <label>Title</label>
            <input value={title} onChange={handleTitleChange} className="task-input"/>
  
            <label>Description</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows="4" className="task-input"/>
  
            <button onClick={handleSubmit} className="task-button update-button">Update</button>
          </form>
        </div>
      </div>
    )
  }
  else{
    return (
      <div>
        <div className="task-create">
          <h3>Add a new task:</h3>
          <form className="inputForm">
            <label>Enter Title</label>
            <input value={title} onChange={handleTitleChange} className="task-input"/>
  
            <label>Enter Task Description</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows="4" className="task-input"/>
  
            <button onClick={handleSubmit} className="task-button">Create</button>
          </form>
        </div>
      </div>
    );
  }

  
}

export default TaskCreate;
