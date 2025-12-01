const App = () => {
        <div>
            <Animals 
                name="Stevie Chicks" 
                species="Silkie Chicken"
                isCute= {true}
                />
            < RandomNum />
            < RandomNum />
            < RandomNum />
            < Bouncer age={19} />
            < Bouncer age={11} />
            < Bouncer age={39} />
        </div>
}
//This is not working: Most likely outdated 
//ReactDOM.render(<App />, document.getElementById("root"));


//This ensures ReactDOM is loaded before your JSX runs.
document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<App />, document.getElementById("root"))
});
