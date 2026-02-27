# Circle Project

A React app built with **Vite** that lets users add colored circles and randomly reposition them on the screen.

---

## What It Does

- Users can click **color buttons** to add a new circle of that color.
- Each circle is **positioned randomly** on the screen.
- Clicking a circle will **randomly reposition it**.
- Demonstrates React **state management** and **component composition**.

---

## How It Works

- Built with **React 19** and **Vite**.
- Uses functional components and `useState` to manage circles.
- Components:
  - `Circle` – displays an individual circle with color and position.
  - `ColoredCircles` – manages the state of all circles and renders `Circle` components.
  - `ColorButtons` – displays buttons to add circles of different colors.
- Random positions are generated using a helper function `getRandom()` (percentage of viewport height/width).

---

## How to Run

1. Make sure Node.js is installed on your machine.
2. Clone or download the project.
3. Install dependencies:

```bash
npm install