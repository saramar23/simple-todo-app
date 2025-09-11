import { createContext, useReducer, useContext } from 'react';
import type { State, Action } from '../types/index';
import taskReducer from './taskReducer';


const TasksContext = createContext<State | undefined>(undefined); // State of the tasks
const TasksDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);  // Dispatch function to update the state of the tasks

// TasksContext is a context that provides the state of the tasks
// TasksDispatchContext is a context that provides the dispatch function to update the state of the tasks

// TasksProvider is a component that provides the state and dispatch function to the children

const TasksProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(taskReducer, { tasks: [], filter: 'all' })
return (
    <TasksContext.Provider value={state}>
        <TasksDispatchContext.Provider value={dispatch}> {children} </TasksDispatchContext.Provider>
    </TasksContext.Provider>);
};

// useTasks is a hook that provides the state of the tasks
const useTasks = () => {
    const context = useContext(TasksContext);
    return {context};
}

// useTasksDispatch is a hook that provides the dispatch function to update the state of the tasks
const useTasksDispatch = () => {
    const tasksDisp = useContext(TasksDispatchContext);
    return {tasksDisp};
}


export { TasksContext, TasksDispatchContext, TasksProvider, useTasks, useTasksDispatch };



