# Event-Driven DOM Manipulation Exercise

This project demonstrates **DOM manipulation** and **event handling** in JavaScript. Users can dynamically create, update, and remove boxes with various interactions.

---

## Features

1. **Create Boxes**
   - Click the "New Box" button or press the `N` key to add a new box.
   - Boxes are sequentially numbered (`Box 1`, `Box 2`, ...).
   
2. **Custom Box Colors**
   - Use the color input form to set a new color.
   - Newly created boxes will adopt the chosen color.
   
3. **Remove Boxes**
   - Double-click any box to remove it from the container.
   
4. **Mouse Interactions**
   - Hovering over a box displays the current mouse coordinates.
   - Moving the mouse away restores the original box label.

5. **Keyboard Shortcuts**
   - Press `N` or `n` anywhere (except the color input) to create a new box.

---

## Technologies Used

- JavaScript (DOM API, event listeners)
- HTML5 (forms, buttons, divs)
- CSS3 (flexbox layout, hover effects, styling)

---

## How It Works

- **Box Creation:** `createElement` + `appendChild` dynamically adds boxes.
- **Event Delegation:** A single `document` listener handles `dblclick`, `mouseover`, and `mouseout` for all boxes.
- **Form Handling:** Prevents default submit to avoid page reload, updates box color dynamically.
- **Data Attributes:** Each box has a `data-id` for numbering and hover label restoration.
- **Keyboard Events:** Listens for global keydown events to create boxes using the keyboard.

---

## File Structure

---

## Learning Outcomes

- Understanding **event delegation** in JavaScript.
- Dynamically **manipulating the DOM** with JavaScript.
- Managing **form submissions** and **keyboard/mouse events**.
- Integrating CSS with JS to produce interactive UIs.
- Using **data attributes** to track dynamic elements.

---

## Usage

1. Open `index.html` in the browser.
2. Use the form to set a new color for boxes.
3. Click "New Box" or press `N` to add boxes.
4. Hover over boxes to see coordinates.
5. Double-click boxes to remove them.