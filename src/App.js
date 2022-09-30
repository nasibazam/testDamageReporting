import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Front Entrance Broken',
        day: 'Feb 5th',
        reminder: true,
    },
    
    {
        id: 2,
        text: 'Require more surveillance camera',
        day: 'Feb 6th',
        reminder: true,
    },
    {
        id: 3,
        text: 'Water dropping from ceiling',
        day: 'Feb 7th',
        reminder: true,
    }
 ] 
)

// Add Tasks
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+ 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}
// Delete
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  }
// Checking
const handle = () => {
  console.log('hello w');
}
// Taggle
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder:
     !task.reminder} : task));
}

  return (
    <div className= 'container'>
      <h1>Property Damage Reporting</h1>
      <Header title= 'Form'/>
      <button onClick={handle}>click</button >
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (
        'No task to show')}
    </div>
  );
}

export default App;
