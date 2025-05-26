import { Task } from "../types/task";
export type TaskAction = 
| {type : 'ADD', payload : string} 
| {type : 'DELETE', payload : number}
| {type : 'TOGGLE', payload : number}

export function taskReducer(state:Task[], action:TaskAction){
    switch (action.type){
        case "ADD":
            return [
                ...state,
                {
                    id : Date.now(),
                    task : action.payload,
                    completed : false
                }
            ]

        case "DELETE":
            return state.filter((task)=>task.id!==action.payload)
        
        case "TOGGLE":
            return state.map((task)=>task.id===action.payload?{...task,completed : !task.completed}:task)
        
        default:
            return state
    }
}