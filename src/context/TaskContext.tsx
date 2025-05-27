import React, { createContext, useReducer, Dispatch, ReactNode, useEffect } from "react";
import { Task } from "../types/task";
import { taskReducer, TaskAction } from "../reducers/taskReducer";
import { useLocalStorage } from "../hooks/useLocalStorage";


// Create context to create a shared global state, coming from ContextAPI
// useReducer: React hook to handel complex state logic using action
// dispatch : TypeScript typed for dispatching reducer action
// ReactNode : A type that represents any valid childs (JSX, general strings, numbers, etc)


// Task an interface representing an interface
interface TaskContextType {
    tasks: Task[],
    dispatch: Dispatch<TaskAction>
}

// TaskReducer function to handle task logic {ADD, DELETE and TOGGLE}
// TaskAction a union type that allows only ADD, DELETE and TOGGLE
// TaskContextType describes the whole tasks logic and also dispatch function for sending task action to the reducer function.

export const TaskContext = createContext<TaskContextType | undefined>(undefined)
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    
    // Used the useLocalStorage to get the local storage and also to set the local store
    // if the tasks exist [{task1},{task2}...]
    // else empty array
    const [storedTasks,setStoredTask] = useLocalStorage<Task[]>('tasks',[])
    // assigning tasks with stored task under local storage
    const [tasks, dispatch] = useReducer(taskReducer, storedTasks)
    
    // if task gets updated running the side effect to store the task into local storage
    useEffect(()=>{
        setStoredTask(tasks)
    },[tasks])

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>
    )
}