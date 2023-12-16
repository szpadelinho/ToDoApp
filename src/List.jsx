import "./App.css"
import {useState} from "react"

const list = []

const List = () => {
    const [ToDo, setToDo] = useState(list)

    const removeTaskHandler = (id) => {
        setToDo(
            ToDo.filter(
                task => {
                    return task.id !== id
                }
            )
        )
    }

    const [id, setId] = useState(0)

    const idHandler = () => {
        setId((prevId) => prevId + 1)
    }

    const addTaskHandler = () => {
        const newTask = {
            id: id,
            text: "Test"
        }
        setToDo(...ToDo, newTask)
    }

    return(
        <section>
            <ul>
                {
                    ToDo.map(
                        task => {
                            <li key={task.id}>
                                {task.text}
                                <button onClick={()=>removeTaskHandler(task.id)}>Usuń</button>
                            </li>
                        }
                    )
                }
            </ul>
        </section>
    )
}

export default List