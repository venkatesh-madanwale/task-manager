import React, {useContext, useState} from "react";
import { TaskContext } from "../context/TaskContext";
import AddButton from "./AddButton";

const TaskInput : React.FC = ()=>{
    const [input, setInput] = useState("")
    const context = useContext(TaskContext)
    if (!context){
        throw new Error("task context not found!")
    }
    const {dispatch} = context
    const handleAdd = ()=>{
        if (input.trim()){
            dispatch({type:'ADD', payload: input})
            setInput("")
        }
    }
    return(
        <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter a Task" />
            {/* <button onClick={handleAdd}>Add</button> */}
            <AddButton onClick={handleAdd} label="Add task"/>
        </div>
    )
}