import { Task } from "./Task"

type TaskList = {
    listTask:string[]
    deleteTask:(index:number)=>void
}
    
export const ListTask = ({listTask, deleteTask}:TaskList) => {
  return (
    <div>
{listTask.map((task, index)=>(
    <Task key={index} task={task} deleteTask={()=>deleteTask(index)}></Task>
)
)}

    </div>
  )
}