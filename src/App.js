import logo from './logo.svg';
import './App.css';
import Task from './Task';
import Button from './Button';



function App() {
  return (
    <div className="App">
      <Button permission="ADD_TASK">Add Task</Button>
     <Task  permission='VIEW_TASK'/>
    </div>
  );
}

export default App;
