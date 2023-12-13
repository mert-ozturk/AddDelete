import React, { useEffect, useState } from 'react'
import Task from './Task';

const Home = () => {
  const initialArray = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];

    const [tasks,setTasks] = useState(initialArray);
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

     const submitHandler = (e) => {
      e.preventDefault();
      setTasks([...tasks,{title,description}]);
    }

    const deleteTask = (index) => {
      const filterArr = tasks.filter((val,i)=> {
        return i !== index;
      })
      setTasks(filterArr)
    }
    useEffect(()=> {
      localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} /> 
        <textarea placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type='submit' onClick={deleteTask}>ADD</button>
      </form>
      {tasks.map((item,index)=> (
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
     )) }
    </div>
  )
}

export default Home
