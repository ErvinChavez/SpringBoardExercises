const App = () => {
  return (
    <div>
      <Animals name="Stevie Chicks" species="Silkie Chicken" isCute={true} />
      <RandomNum />
      <RandomNum />
      <RandomNum />
      <Bouncer age={19} />
      <Bouncer age={11} />
      <Bouncer age={39} />
      <Shiba />
      <SharPei />
      <Shiba />
      <TodoList todos={["walk chicken", "feed chicken", "eat chickens"]}/>
    </div>
  );
};

// React 18 Mounting
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//This is not working: Most likely outdated 
//ReactDOM.render(<App />, document.getElementById("root"));

