// -   [ ] 2.2 Build the `TaskItem` component. It should accept a `task` object as a prop and display its text. 
// Use Tailwind CSS to apply a `line-through` style if `task.completed` is true.
// -   [ ] 2.3 Add a checkbox to `TaskItem` that calls a prop function to toggle the task's completion status. 

import type { Task } from "../types";
import { FaTrash } from "react-icons/fa";

// Props passed down to a component from TaskList parent. TaskItem needs three props(properties)
type TaskProps = {
    task: Task;
    toggle: () => void;
    remove: () => void;
};

const TaskItem = ({ task, toggle, remove }: TaskProps) => {

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
            <input type="checkbox" id={`task-${task.id}`} checked={task.completed} onChange={toggle}/>
            <label htmlFor={`task-${task.id}`} style={{ flex: 1, overflowWrap: "anywhere", wordBreak: "break-word" }}>
                <span className={task.completed ? "line-through" : ""}>{task.title}</span>
            </label>
            <button type="button" className="trashButton" onClick={remove}><FaTrash /></button>
        </div>
    )
}

export default TaskItem;