const App = () => {
    return (
        <div>
            <Shiba />
            <SharPei />
            <Shiba />
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("root"))
});
