# Local Storage Notes App

This project demonstrates how to **use localStorage in the browser** to save, update, and delete notes dynamically. Users can also set a **background color** for all notes.

---

## Features

1. **Add New Notes**
   - Click the **"New Note"** button or press the **"n"** key to add a new note.
   - Each note is a `textarea` element with a unique ID.
   - The note is saved to **localStorage** immediately.

2. **Set Note Colors**
   - Enter a color in the **Note Color** input field and submit the form.
   - Updates the background color of all existing notes.
   - Saves the selected color in **localStorage** so future notes use it.

3. **Edit Notes**
   - Click into a note, change its content, and **blur (click outside)** the note.
   - Changes are automatically saved in **localStorage**.

4. **Delete Notes**
   - Double-click on a note to delete it.
   - Deleted notes are also removed from **localStorage**.

5. **Persistent Notes**
   - Reloading the page restores all saved notes with their IDs and colors from **localStorage**.
   - Note ID counter is maintained in **localStorage** to prevent duplicate IDs.

---

## How It Works

### 1. Storing Notes
- Notes are stored as an **array of objects** in localStorage:
```js
[
  { id: 0, content: "Note 0" },
  { id: 1, content: "Note 1" },
  ...
]