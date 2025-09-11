import type { State, Action } from '../types/index.ts';

function taskReducer(state: State, action: Action): State {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, {id: Date.now(), title: action.params.title, completed: false}]
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.params.id ? { ...task, completed: !task.completed } : task),
            };
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.params.id),
            };
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.params.filter,
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                tasks: state.tasks.filter((task) => !task.completed),
            };
        default:
            return state;
    }
}

export default taskReducer;