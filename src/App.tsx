import React, { useState, useLayoutEffect, useRef,useEffect } from "react";
import { Task } from "./types/task";
function App() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [input, setInput] = useState('')
    const addTask = () => {
        if (input.trim()) {
            setTasks(prev => [...prev, { id: Date.now(), task: input, completed: false }])
            setInput("")
        }
    }


// useEffect() for mount 
    useEffect(()=>{
        const stored = localStorage.getItem("tasks")
        if(stored){
            setTasks(JSON.parse(stored))
        }
    },[])
    // if dependency array is empty, it run at the start of application (onMount)
    // side effect to retrive from local storage to retrive if only task obj exists.
    
// useEffect() for update
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks])

//useLayoutEffect() for scroll of DOM
    const listEndRef = useRef<HTMLDivElement|null>(null)
    useLayoutEffect(()=>{
        if (listEndRef.current){
            listEndRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    },[tasks])

    return (
        <div>
            <h1>Task Manager</h1>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map(task => (<li key={task.id}>{task.task}</li>))}
            </ul>
        </div>
    )
}
export default App()