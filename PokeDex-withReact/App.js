/* This should just render a single Pokedex. 
(It’s common for the top-level app to not have direct logic in it
, but to render the top application object — 
this becomes useful when you build sites that compose several
 different parts together.)*/

function App() {
  return (
    <div>
      <Pokedex />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
