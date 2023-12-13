import React from 'react'

const Task = ({title,description,deleteTask,index}) => {
  return (
    <div> 
    <div>
      <p>{title}</p>
      <span>{description}</span>
    </div>
    <button onClick={()=>deleteTask(index)}>delete</button>
    </div>
  )
}

export default Task
