# Array Methods Map Exercise

A JavaScript exercise to practice using **array methods** and **callbacks**.

---

## What It Does

- Uses an array of user objects, each with `firstName`, `lastName`, and `points`.
- Determines each user’s membership status based on points:
  - `points > 100` → Premium
  - `points <= 100` → Standard
- Generates a summary string for each user showing their full name and membership status.
- Demonstrates how to use a **callback function** with a custom iteration function.

---

## How It Works

- Built with **vanilla JavaScript**.
- Uses a custom `fullInfo` function to iterate over the array.
- Could be simplified using `Array.map()` to achieve the same result in a more concise way.
- Runs in the browser via `users.js` included in `index.html`.

---

## How to Run

1. Open `index.html` in your browser.
2. Open the **developer console** (F12 or right-click → Inspect → Console).
3. The list of users with their membership status will be logged.

---

## Notes / Improvements

- Current implementation uses a **manual for-loop** with a callback.
- Can be simplified with `Array.map()` for cleaner, more idiomatic code.
- Focus of this exercise is **understanding callbacks and array transformations**.