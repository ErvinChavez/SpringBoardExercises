# Giphy Party

A small web app that lets users search for GIFs using the [Giphy API](https://developers.giphy.com/docs/api/), displaying the results directly in the browser.

---

## Features

- Search for GIFs by keyword using an HTML form.
- Display the first matching GIF dynamically on the page.
- Handles API responses and dynamically updates the DOM.
- Demonstrates working with API responses, JavaScript objects, and DOM manipulation.

---

## How It Works

- Built with **HTML**, **CSS**, and **vanilla JavaScript**.
- Uses **Axios** to make asynchronous requests to the Giphy API (`async/await`).
- Dynamically updates the `<img>` tag in the DOM with the URL of the GIF.
- Simple form input allows searching for GIFs by category.

---

## How to Run

1. Clone or download this project.
2. Open `index.html` in your browser.
3. Enter a search term in the input field and click **Submit**.
4. The first GIF result from the search will appear in the display area.

> ⚠️ Note: You need a valid Giphy API key in `index.js` (`apiKey`) to fetch GIFs. You can get one for free [here](https://developers.giphy.com/docs/api/#quick-start-guide).

---

## File Structure
