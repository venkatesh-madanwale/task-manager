// A simple task manager application using React with TypeScript.
// This application allows users to add tasks, which are stored in local storage.
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import { Task } from "./types/task";
import AddButton from "./components/AddButton";
import TaskList from "./components/TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";


const App: React.FC = ()=> {// React component
    // State to manage tasks and input
    const [tasks, setTasks] = useState<Task[]>([])
    const [input, setInput] = useState('')
    // Function to add a new task
    // It checks if input is not empty, then adds a new task with a unique id and resets the input field.
    const addTask = () => {
        if (input.trim()) {
            setTasks(prev => [...prev, { id: Date.now(), task: input, completed: false }])
            setInput("")
        }
    }

    // useEffect() for mount 
    // It retrieves tasks from local storage when the component mounts.
    useEffect(() => {
        const stored = localStorage.getItem("tasks")
        if (stored) {
            setTasks(JSON.parse(stored))
        }
    }, [])
    // if dependency array is empty, it run at the start of application (onMount)
    // side effect to retrive from local storage to retrive if only task obj exists.

    // useEffect() for update
    // It saves the tasks to local storage whenever the tasks state changes.
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    //useLayoutEffect() for scroll of DOM
    // It scrolls to the bottom of the task list whenever a new task is added.
    const listEndRef = useRef<HTMLDivElement | null>(null)
    // useRef is used to create a mutable object that persists for the full lifetime of the component.
    // It is initialized to null and will hold a reference to the end of the task list for scrolling purposes.
    useLayoutEffect(() => {
        // This effect runs after the tasks state changes, ensuring that the scroll happens after the new task is added.
        // scrollIntoView is a method that scrolls the element into view.
        if (listEndRef.current) {
            listEndRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [tasks])
    // useLayoutEffect is used to perform DOM measurements and updates before the browser has a chance to paint, ensuring a smoother user experience.
    // This effect runs after the tasks state changes, ensuring that the scroll happens after the new task is added.
    return (// JSX to render the task manager UI
        <div>
            <h1>Task Manager</h1>
            {/* Input field to enter new tasks */}
            {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a Task"/>



            {/* Button to add the task */}
            {/* <button onClick={addTask}>Add</button> */}
            <AddButton onClick={addTask} label="Add Task" />



            {/* List of tasks */}            
            {/* <ul>
                {tasks.map(task => (<li key={task.id}>{task.task}</li>))}
            </ul> */}

            <TaskList tasks={tasks} />

        </div>
    )
}
// The App component is exported as the default export of the module.
export default App