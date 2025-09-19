import './App.css'
import AddTaskForm from './components/AddTaskForm';
// import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';



function App() {

  return (
    <div>
      <h1>Todo App for Noobs</h1>
      <div className="card">
        <AddTaskForm></AddTaskForm>   
        <TaskList />    
      </div>
    </div>
  )
}

export default App;
