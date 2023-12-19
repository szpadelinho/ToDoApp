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
            <div className="listFlex">
              <p>{task.text}</p>
              <p id="date">{task.day}.{task.month}.{task.year} - {task.hour}:{task.minute}</p>
              <button onClick={() => removeTaskHandler(task.id)}>Usuń</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List