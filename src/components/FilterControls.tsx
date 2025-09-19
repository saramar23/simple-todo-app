// // -   [ ] 2.4 Build the `FilterControls` component. It will display the three filter buttons. The currently active filter should have a distinct style. 
// //     Clicking a button should call a prop function to update the filter state.

// import type { Filter, Task } from "../types";
// import React, { useContext, useState } from 'react';
// import TaskList from "./TaskList";
// import { TasksContext, TasksDispatchContext } from "../context/TasksContext";

// // all, active, completed

// type FilterMap = {
//     all: () => true,
//     active: (param: Task) => Task["completed"];
//     completed: (param: Task) => Task["completed"];
// }


// const FilterControls = ({ all, active, completed }: FilterMap) => {
    
//     const filter = useContext(TasksContext);
//     const dispatch = useContext(TasksDispatchContext);

//     if (!dispatch) {
//         throw new Error("Error: dispatch not available");
//     }

//     const taskFilter = (filter: Filter) => {
//         dispatch({type: "SET_FILTER", params: { filter: filter }});
//     }

//     // const onFilterChange = (e: React.MouseEvent) => {
//     //     if (taskFilter === "all") {

//     //     } else if (taskFilter === "active") {

//     //     }
//     // }

//     // return (
//     //     <div>
//     //         <input type="checkbox" checked={taskFilter}> </input>
//     //         <label>All</label>
//     //     </div>
//     // )


// }