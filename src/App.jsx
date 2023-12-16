import { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import List from "./List.jsx"
import NewNote from "./NewNote.jsx"

function App() {
  return(
    <main>
      <Header/>
      <List/>
      <NewNote/>
    </main>
    )
}

export default App
