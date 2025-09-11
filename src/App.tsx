import './App.css'
import AddTaskForm from './components/AddTaskForm';
// import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TasksContext';


function App() {

  return (
    <TasksProvider>
      <h1>Todo App for Noobs</h1>
      <div className="card">
        <AddTaskForm></AddTaskForm>   
        <TaskList />    
      </div>
    </TasksProvider>
  )
}

export default App;
