import { Task } from "../types/task";
export type TaskAction =
    // TaskAction type defines the possible actions that can be performed on tasks.
    | { type: 'ADD', payload: string }
    | { type: 'DELETE', payload: number }
    | { type: 'TOGGLE', payload: number }
// It can be an ADD action with a payload of a string, a DELETE action with a payload of a number, or a TOGGLE action with a payload of a number.


export function taskReducer(state: Task[], action: TaskAction) {
    // taskReducer function takes the current state and an action, and returns a new state based on the action type.
    // The state is an array of Task objects, and the action is of type TaskAction.
    switch (action.type) {
        // Add a new task
        case "ADD":
            return [
                ...state,
                {
                    id: Date.now(),
                    task: action.payload,
                    completed: false
                }
            ]
        // To delete a task if it exists in the state
        case "DELETE":
            return state.filter((task) => task.id !== action.payload)
        // To toggle the status of a task wheather it is completed or not.
        case "TOGGLE":
            return state.map((task) => task.id === action.payload ? { ...task, completed: !task.completed } : task)
        // If the action type does not match any case, return the current state unchanged.
        default:
            return state
    }
}