# Array Filter Exercise

A small JavaScript exercise to practice **array filtering**.

---

## What It Does

- Uses an array of planet objects, each with `name`, `temperature` (in Kelvin), and `distance` (in AU) properties.
- Filters planets based on:
  - Temperature between **253 K and 323 K**
  - Distance from the Sun between **0.75 and 1.5 AU**
- Logs the names of planets that meet each criterion to the console.

---

## How It Works

- Built with **vanilla JavaScript**.
- Uses the `Array.filter()` method to find planets matching the conditions.
- Runs in the browser via `planets.js` included in `index.html`.

---

## How to Run

1. Open `index.html` in your browser.
2. Open the **developer console** (F12 or right-click → Inspect → Console).
3. The planets meeting the temperature and distance criteria will be logged.

---

## Notes / Improvements

- Currently filters temperature and distance in two separate variables.  
- Could be combined into a **single filter** to check both conditions at once.  
- This exercise is mainly for **practice with JavaScript array methods**.