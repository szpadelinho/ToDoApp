import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import List from "./List.jsx"
import NewNote from "./NewNote.jsx"

function App() {
  const [tasks, setTasks] = useState([])
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  const addTaskHandler = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const closePanelHandler = () => {
    setIsPanelOpen(false)
  }

  const openPanelHandler = () => {
    setIsPanelOpen(true)
  }

  return (
    <main>
      <Header onAddTask={addTaskHandler} openPanel={openPanelHandler} />
      <List tasks={tasks} setTasks={setTasks} />
      <NewNote onAddTask={addTaskHandler} onClosePanel={closePanelHandler} isPanelOpen={isPanelOpen} />
    </main>
  )
}

export default App
