# Jeopardy Game Project

This project is a simplified web-based **Jeopardy game** that dynamically fetches categories and questions from the **jService API** and displays them in a table.

---

## Features

- **Dynamic Game Board**: 6 categories across, 5 questions down.
- **Random Categories**: Selects 6 random categories from the API each game.
- **Random Questions**: Picks 5 random clues per category.
- **Interactive Clues**:
  - Click a **"?"** to reveal the question.
  - Click a question to reveal the answer.
  - Clicking an answer does nothing.
- **Restart Game**: Reloads a new set of categories and clues.
- **Loading Spinner**: Shows a spinner while fetching data from the API.

---

## File Structure

- **index.html**  
  HTML skeleton with a start/restart button and table for the board. Imports jQuery, Axios, Lodash, and `jeopardy.js`.

- **jeopardy.css**  
  Basic styling for the board, including a spinner animation.

- **jeopardy.js**  
  Main JavaScript logic:
  - Fetch random category IDs (`getCategoryIds`)
  - Fetch category data with 5 random clues (`getCategory`)
  - Build the table dynamically (`fillTable`)
  - Handle clue clicks to reveal questions/answers (`handleClick`)
  - Show/hide loading spinner (`showLoadingView`, `hideLoadingView`)
  - Start/restart the game (`setupAndStart`)

- **jeopardy.gif / jeopardyProjectRubrics.jpg**  
  Visual references and rubric for the project.

---

## How It Works

1. Press **Start / Restart Game**.
2. Game fetches 6 random categories from the API.
3. Each category has 5 random clues (questions/answers).
4. The board initially shows "?" for each clue.
5. Clicking a cell cycles from:
   - `?` → question → answer → (no further action)
6. Press **Restart** to load a new board.

---

## Notes / Improvements

- **Data Validation**: Ensures categories have at least 5 valid clues with both question and answer.
- **Performance**: Uses Lodash's `sampleSize` to pick random items efficiently.
- **Loading Spinner**: Prevents user interaction until board is ready.
- **Possible Improvement**:
  - Track score for correct answers.
  - Add styling for answered clues (like greyed-out cells).
  - Add timer per clue for a more game-like experience.

---

## Dependencies

- [jQuery](https://jquery.com/)
- [Axios](https://axios-http.com/)
- [Lodash](https://lodash.com/)
- jService API ([https://jservice.io](https://jservice.io))

---

## Usage

1. Open `index.html` in a browser.
2. Click **Start / Restart Game**.
3. Click on **"?"** cells to play.