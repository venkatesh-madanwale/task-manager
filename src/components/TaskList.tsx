import React, {useContext, useMemo} from "react";
import { TaskContext } from "../context/TaskContext";

type Task = {
  id: number | string;
  task: string;
};

type TaskListProps = {
  tasks: Task[];
};

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) return <p>No tasks yet.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          {task.task}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;