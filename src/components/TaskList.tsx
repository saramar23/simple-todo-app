import { TasksDispatchContext, TasksContext } from "../context/TasksContext";
import { useContext } from "react";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasksArray = useContext(TasksContext);
    const dispatchFunction = useContext(TasksDispatchContext);

    if (!dispatchFunction) {
        throw new Error("Error: TasksDispatchContext is not available.");
    }

    const toggleTask = (id: Task["id"]) => {
        dispatchFunction({ type: "TOGGLE_TASK", params: { id }});
    }

    const removeTask = (id: Task["id"]) => {
        dispatchFunction({ type: "DELETE_TASK", params: { id }});
    }

    if (!tasksArray) {
        throw new Error("Tasks Context not available");
    }

    {tasksArray.tasks.map((task) => {
        return (
            <div>
                <TaskItem key={task.id} task={task} toggle={() => toggleTask(task.id)} remove={() => removeTask(task.id)}></TaskItem>
            </div>
        )
    })}
}

export default TaskList;