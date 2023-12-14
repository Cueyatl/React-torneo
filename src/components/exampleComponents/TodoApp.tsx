import { useState } from "react"
import { ListTask } from "./ListTask";

export const  TodoApp =() => {
    const [newTask, setNewTask]=useState<string>("");
    const [listTask, setlistTask] = useState<string[]>([]);


    const handleAddTask=()=>{
        if(newTask.trim()==="")return
        setlistTask(allTasks=>[...allTasks, newTask]);
        setNewTask("");
    }    

    const handleDeleteTask=(index:number)=>{
        setlistTask(tasks =>  tasks.filter((_,i)=>i!==index) )

    }



  return (
    <div>
        <h1>lista de tareas.</h1>
    <div>
        <input type="text"  
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)} 
        placeholder="New task"
        />
    <button type="button" onClick={handleAddTask}>Add Task</button>
    </div>
    <ListTask listTask={listTask} deleteTask={handleDeleteTask}></ListTask>
    </div>
  )
}
 