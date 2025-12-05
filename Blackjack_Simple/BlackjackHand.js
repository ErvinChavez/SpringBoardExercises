function Blackjack() {
  // Step 1: Create a small deck of cards
  const cards = [
    { code: "AH", value: "ACE", img: "https://deckofcardsapi.com/static/img/AH.png" },
    { code: "2H", value: "2", img: "https://deckofcardsapi.com/static/img/2H.png" },
    { code: "3H", value: "3", img: "https://deckofcardsapi.com/static/img/3H.png" },
    { code: "KH", value: "KING", img: "https://deckofcardsapi.com/static/img/KH.png" },
    { code: "QD", value: "QUEEN", img: "https://deckofcardsapi.com/static/img/QD.png" },
    { code: "JD", value: "JACK", img: "https://deckofcardsapi.com/static/img/JD.png" },
    { code: "10C", value: "10", img: "https://deckofcardsapi.com/static/img/0C.png" },
    { code: "9S", value: "9", img: "https://deckofcardsapi.com/static/img/9S.png" }
  ];

  // Step 2: Pick two different random cards
  const index1 = Math.floor(Math.random() * cards.length);
  let index2 = Math.floor(Math.random() * cards.length);

  // Make sure the second card is different from the first
  if (index2 === index1) {
    if (index2 === 0) {
      index2 = 1;
    } else {
      index2 = index2 - 1;
    }
  }

  const card1 = cards[index1];
  const card2 = cards[index2];

  // Step 3: Get numeric value of each card
  let cardValue1;
  let cardValue2;

  // Card 1
  if (card1.value === "JACK" || card1.value === "QUEEN" || card1.value === "KING") {
    cardValue1 = 10;
  } else if (card1.value === "ACE") {
    cardValue1 = 11;
  } else {
    cardValue1 = Number(card1.value);
  }

  // Card 2
  if (card2.value === "JACK" || card2.value === "QUEEN" || card2.value === "KING") {
    cardValue2 = 10;
  } else if (card2.value === "ACE") {
    cardValue2 = 11;
  } else {
    cardValue2 = Number(card2.value);
  }

  const totalScore = cardValue1 + cardValue2;

  // Step 4: Render cards and score
  return (
    <div>
      <h1>Blackjack!</h1>
      <div>
        <img src={card1.img} alt={card1.code} />
        <img src={card2.img} alt={card2.code} />
      </div>
      <p>Total Score: {totalScore}</p>
      {totalScore === 21 && <p style={{ color: "green", fontWeight: "bold" }}>Blackjack!</p>}
    </div>
  );
}

// Render the Blackjack component
ReactDOM.render(<Blackjack />, document.getElementById("root"));
