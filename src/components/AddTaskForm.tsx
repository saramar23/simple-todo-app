// 2.1 Build the `AddTaskForm` component. It should manage its own state for the input field. 
// On form submission, it will call a function passed via props to add the new task.

import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../context/TasksContext';
import type { Action } from '../types/index';

const AddTaskForm = () => {

    const [task, setTask] = useState(''); 
    const dispatch = useContext(TasksDispatchContext); //Remote control that sends instructions to the task list

    if (!dispatch) {
        throw new Error("Error");
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!task.trim()) return;

        const action: Action = { type: "ADD_TASK", params: { title: task } };
        dispatch(action); //Send the instruction to add the task

        setTask(""); //clean up
    }

    return (
        <div className="addTaskForm">
            <h2>Add something to do</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Buy bananas..." value={task} onChange={(e) => setTask(e.target.value)}></input>
                <button type="submit">+ Add Task</button>
            </form>
        </div>
    );
};

export default AddTaskForm;