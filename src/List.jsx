import "./App.css"
import { useState } from "react"

const List = ({ tasks, setTasks }) => {
  const removeTaskHandler = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <p>{task.text}</p>
            <button onClick={() => removeTaskHandler(task.id)}>Usuń</button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List