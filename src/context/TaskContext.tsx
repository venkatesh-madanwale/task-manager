import React, { createContext, useReducer, Dispatch, ReactNode } from "react";
import { Task } from "../types/task";
import { taskReducer, TaskAction } from "../reducers/taskReducer";


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
    const [tasks, dispatch] = useReducer(taskReducer, [])
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>
    )
}