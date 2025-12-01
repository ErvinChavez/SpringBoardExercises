const Animals = (props) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Species: {props.species}</li>
      <li>IsCute: {props.isCute ? "yes" : "no"}</li>
    </ul>
  );
};
