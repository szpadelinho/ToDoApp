import { useState } from "react"
import "./App.css"

const NewNote = ({ onClosePanel, onAddTask, isPanelOpen }) => {
  const [text, setText] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()

    const d = new Date()

    const newTask = {
      id: Date.now(),
      text: text,
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
      hour: d.getHours(),
      minute: d.getMinutes()
    }

    onAddTask(newTask)
    setText("")
    onClosePanel()
  }

  const closePanelHandler = () => {
    onClosePanel()
  }

  return (
    <article className={`newNotePanel ${isPanelOpen ? "open" : ""}`}>
      <div>
        <form onSubmit={submitHandler}>
          <h3 id="closer"><button id="close" type="button" onClick={closePanelHandler}>X</button></h3>
          <h1>Utwórz swoją nową notatkę</h1>
          <h1><input placeholder="Co muszę zrobić?" value={text} onChange={(e) => setText(e.target.value)} /></h1>
          <h3><button type="submit">Dodaj zadanie</button></h3>
        </form>
      </div>
    </article>
  )
}

export default NewNote
