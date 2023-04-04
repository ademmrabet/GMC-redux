
import './App.css';
import AddTasks from './componenets/AddTasks';
import FilterTasks from './componenets/FilterTasks';
import ListTasks from './componenets/ListTasks';

function App() {
  return (
    <div className="App">
      <h3>ToDo Application</h3>
      <FilterTasks/>
      <ListTasks/>
      <AddTasks/>
    </div>
  );
}

export default App;
