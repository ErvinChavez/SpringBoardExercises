# Dice Roll Project 🎲

A React app built with **Vite** that simulates rolling dice. Users can roll multiple dice at once and see the results displayed dynamically.

---

## Features

- Roll **multiple dice** simultaneously (default 6 dice, but configurable).  
- Each die shows a **random number** between 1 and a maximum value (default 20, configurable).  
- Users can customize the **number of dice**, **maximum value**, and **title** for each dice set.  
- Dice are displayed in a clean, simple UI with individual components for each die.

---

## Components

- **`Dice`** – Manages a group of dice and handles rolling logic. Uses `useState` to keep track of current dice values.  
- **`Die`** – Displays a single die value.  
- **`App`** – Main app component that renders multiple `Dice` components.

### How Dice State Works

```javascript
const [numbers, setNumbers] = useState(Array.from({ length: numDice }));