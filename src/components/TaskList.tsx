import React, { useContext, useMemo } from "react";
import { TaskContext } from "../context/TaskContext";


const TaskList: React.FC = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error("Task context not found!")
  }

  const { tasks, dispatch } = context

  const incompleteTask = useMemo(() => {
    console.log("Filtering tasks")
    return tasks.filter((task) => (!task.completed))
  }, [tasks])
  // Recompute only when task state changes

  const completed = useMemo(()=>{
    console.log("Filtering completed tasks")
    return tasks.filter((task) => (task.completed))
  }, [tasks])

  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <div>
    <ul className="task-list">
      {/* {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.task}
        </li>
      ))} */}

      {
        incompleteTask.map((task) =>
        (
          <li key={task.id}><input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })} /> {task.task}
            <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
            </svg></button>
          </li>
        ))
      }
    </ul>


      <ul>
      {
        completed.map((task) =>
        (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => dispatch({ type: 'TOGGLE', payload: task.id })} /> 
            {task.task}
            <button onClick={() => dispatch({ type: 'DELETE', payload: task.id })}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24">
              <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 4.109375 5 L 5.8925781 20.255859 L 5.8925781 20.263672 C 6.023602 21.250335 6.8803207 22 7.875 22 L 16.123047 22 C 17.117726 22 17.974445 21.250322 18.105469 20.263672 L 18.107422 20.255859 L 19.890625 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 6.125 5 L 17.875 5 L 16.123047 20 L 7.875 20 L 6.125 5 z"></path>
            </svg></button>
          </li>
        ))
      }
      </ul>
      </div>

      
  );
};

export default TaskList;