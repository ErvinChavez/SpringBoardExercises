# Hello World React App

This project is a minimal **React + Vite** setup that demonstrates basic React concepts, including **functional components**, **state management** with `useState`, and event handling.

---

## Project Structure

- **src/App.jsx**  
  The main App component that renders the `SimpleCounter` component.

- **src/simpleCounter.jsx**  
  A simple counter component demonstrating React **state** and **event handling**.
  
- **src/index.css & src/App.css**  
  Basic styling for layout and font defaults.

- **src/main.jsx**  
  Entry point of the React application that mounts `<App />` to the DOM.

---

## Features

### SimpleCounter Component

- Uses `useState` to track a numeric value.
- Has two buttons:
  1. **Up** — increases the count by 1.
  2. **Up By 2** — intended to increase the count by 2 (though note: calling `setNum(num + 1)` twice in a row doesn’t reliably increment by 2 due to React state batching).
- Displays the current count in an `<h3>` element.

```jsx
<h3>Count: {num}</h3>
<button onClick={clickUp}>Up</button>
<button onClick={clickUpBy2}>Up By 2</button>