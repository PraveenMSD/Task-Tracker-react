import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'First Task',
      day: 'Feb 18th at 02:00pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Second Task',
      day: 'Feb 19th at 02:00pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Third Task',
      day: 'Feb 20th at 11:00am',
      reminder: true,
    },
  ])

  // Add task to the existing task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete event task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder of task

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ):(
        'No Task to Show!'
      )}
    </div>
  );
}

export default App;