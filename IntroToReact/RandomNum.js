const RandomNum = () => {
  const num = Math.floor(Math.random() * 100) + 1;
  return <p>Random number: {num}</p>;
};
