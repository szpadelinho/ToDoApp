import { useState } from "react"
import "./App.css"
import NewNote from "./NewNote.jsx"

const Header = ({ onAddTask, openPanel }) => {
  return (
    <header>
      <div className="headerText">
        <h1>ToDoApp</h1>
        <h2>Witaj, użytkowniku!</h2>
        <button id="add" onClick={() => openPanel()}>Dodaj notatkę</button>
      </div>
    </header>
  )
}

export default Header
