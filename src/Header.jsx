import "./App.css"

const Header = () => {
    return(
        <header>
            <div className="headerText">
                <h1>ToDoApp</h1>
                <h2>Witaj, użytkowniku!</h2>
                <button>Dodaj notkę</button>
            </div>
        </header>
    )
}

export default Header