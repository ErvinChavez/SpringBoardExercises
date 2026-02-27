# Blackjack Simple

A small React app that randomly draws two cards and calculates a simple Blackjack hand.

---

## What It Does

- Uses a **small deck of cards** with images.
- Randomly selects **two cards** per draw.
- Calculates the **numeric value** of each card:
  - J, Q, K = 10
  - ACE = 11
  - Number cards = face value
- Displays the cards and **total score**.
- Highlights if the total equals **21 (Blackjack)**.

---

## How It Works

- Built with **React (via CDN)** and **Babel standalone**.
- JSX is compiled in the browser to render the Blackjack hand.
- Uses `Math.random()` to pick two different cards.
- Dynamically updates the DOM to show cards and score.
- Basic styling is applied via `styles.css`.

---

## How to Run

1. Open `index.html` in your browser.
2. The app will automatically render a Blackjack hand.
3. Refresh the page to draw **two new random cards**.

---

## File Structure
