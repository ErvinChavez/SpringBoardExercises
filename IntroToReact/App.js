const App = () => {
    return (
        <div>
            < RandomNum />
            < RandomNum />
            < RandomNum />
        </div>
    )
}
//This is not working: Most likely outdated 
//ReactDOM.render(<App />, document.getElementById("root"));


//This ensures ReactDOM is loaded before your JSX runs.
document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("root"))
});
