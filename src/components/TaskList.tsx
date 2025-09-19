import { TasksDispatchContext, TasksContext } from "../context/TasksContext";
import { useContext } from "react";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

const TaskList = () => {
    const tasksArray = useContext(TasksContext); 
    /* Hook that reads the tasks through a React Context object that holds the current tasks data (TasksContext.Provider {value})
    ** If there's no matching provider it returns the Ctx's default value, undefined
    */

    const dispatchFunction = useContext(TasksDispatchContext); 
    /* A React Ctxt that provides (reads) the dispatch function to send actions and change the tasks.
    ** Example sending the TOGGLE_TASK action to the task reducer
    */

    if (!dispatchFunction) {
        throw new Error("Error: TasksDispatchContext is not available.");
    }

    // Using TS's indexed access type
    const toggleTask = (id: Task["id"]) => {
        //An Action object pattern: a type string that describes what to do, using its param id for the action. "Do this on this specific task"
        dispatchFunction({ type: "TOGGLE_TASK", params: { id }});
    }

    const removeTask = (id: Task["id"]) => {
        dispatchFunction({ type: "DELETE_TASK", params: { id }});
    }

    if (!tasksArray) {
        throw new Error("Tasks Context not available");
    }

    return (
        <div className="taskListContainer">
            <h2>Task List</h2>
            {tasksArray.tasks.length === 0 ? (<p> No tasks yet . . </p>) : 
                <ul className="space-y-2">
                    {tasksArray.tasks.map((task) => (
                        <li key={task.id}>
                            <TaskItem 
                                task={task} 
                                toggle={() => toggleTask(task.id)} 
                                remove={() => removeTask(task.id)}
                            />
                        </li>
                    ))}
                </ul>}
        </div>
    )
}

export default TaskList;