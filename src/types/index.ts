type Task = {id: number; title: string; completed: boolean};
type Filter = 'all' | 'active' | 'completed';
type State = {
    tasks: Task[];
    filter: Filter;
};

type Action = 
    | { type: 'ADD_TASK'; params: { title: string; } }
    | { type: 'TOGGLE_TASK'; params: { id: number; } }
    | { type: 'DELETE_TASK'; params: { id: number; } }
    | { type: 'SET_FILTER'; params: { filter: Filter; } }
    | { type: 'CLEAR_COMPLETED'; params: { id: number; } };


export type { Task, Filter, State, Action };
