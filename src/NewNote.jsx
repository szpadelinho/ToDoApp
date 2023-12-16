import {useState} from "react"
import "./App.css"

const NewNote = () => {
    const [text, setText] = useState("")

    function submitHandler(e){
        e.preventDefault()



        setText("")
    }

    return(
        <article>
            <div className="newNotePanel">
                <form onSubmit={submitHandler}>
                    
                    <h1>Utwórz swoją nową notatkę</h1>
                    <h1><input placeholder="Co muszę zrobić?" value={text} onChange={e => setText(e.target.value)}/></h1>
                    <h3><button type="submit">Dodaj zadanie</button></h3>
                </form>
            </div>
        </article>
    )
}

export default NewNote;