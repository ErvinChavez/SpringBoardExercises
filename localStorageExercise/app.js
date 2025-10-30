document.addEventListener("DOMContentLoaded", function ()
{
	const noteContainer = document.getElementById("note-container");//variable that targets the element with id: note-container
	const newNoteButton = document.getElementById("new-note-button");//variable that targets the element with id: new-note-button
	const colorForm = document.getElementById("color-form");//variable that targets the element with id:color-form
	const colorInput = document.getElementById("color-input");//variable that targets the element with id: color-input

	// TODO: Load the note color from the local storage.
	let noteColor = localStorage.getItem('noteColor') || null; //variable that gets the item from browser localStorage named: noteColor (if none, set to null)
	// TODO: Load the note ID counter from the local storage.
	let noteIdCounter = parseInt(localStorage.getItem('noteIdCounter')) || 0;//variable that gets the item from browser localStorage named: noteIDCounter BUT wrapped around a parseInt to convert string to interger. (If none, set to 0)	
	
	// TODO: Load the notes from the local storage.
	function readNotes () { //function to readNotes
		let notes = localStorage.getItem("notes");// //variable that gets the item from browser localStorage named: notes
		if (!notes) { //if there is no notes
			notes = []; //notes is equal to empty array
		} else {//if there is
			notes = JSON.parse(notes)//varable that uses JSON.parse to turn notes into and javascript array
		};
		return notes; //return notes
	}
	function saveNotes (notes) {//function to save notes
		localStorage.setItem("notes", JSON.stringify(notes));//variable that sets the item in browser localStorage named; notes: with value equal to notes but in JSON 
	}

	function loadNotes () { //function to loadNotes
	const notes = readNotes();//variable that is set to readNotes function

		for (const note of notes)//for each note in notes
		{
			const noteElement = document.createElement("textarea");//variable that creates an element with id:textarea
			noteElement.setAttribute("data-note-id", note.id.toString()); //Sets the setAttribute of noteElement to data-note-id, and the note id in string
			noteElement.className = "note"; // sets classname of noteElement to note
			noteElement.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
			noteContainer.appendChild(noteElement); // Appends it to the note container element as its child.
		}
	}

	loadNotes(); //call the function

	function addNewNote () {//a new function to addNewNote
	
		const id = noteIdCounter;//id is set to noteIdCounter
		const content = `Note ${id}`;//variable that equals the inside box text to 'Note (id)'

		const note = document.createElement("textarea"); //variable that creates an element with id:textarea
		note.setAttribute("data-note-id", id.toString()); // stores note's setAttribute to id BUT into a string
		note.value = content; // Sets the value as the content( the placeholder).
		note.className = "note"; // Sets a CSS class name of note.
		note.style.backgroundColor = noteColor; // Sets the note's background color using the noteColor.
		noteContainer.appendChild(note); // Appends it to the note container element as its child.
	
		noteIdCounter++; // Increments the counter since the ID is used for this note.

		// TODO: Add new note to the saved notes in the local storage.
		const notes = readNotes();//notes is equal to the function readNotes
		notes.push({id, content});//push the object with id and content to notes
		saveNotes(notes);//saves notes to the localStorage of the browers
		localStorage.setItem("noteIdCounter", noteIdCounter.toString());//sets the localStorage item to: noteIDCounter, noteIDCounter(to string)
	}

	colorForm.addEventListener("submit", function (event) {//listens for a 'submit'
	
		event.preventDefault(); // Prevents the default event.

		const newColor = colorInput.value.trim();  // Removes whitespaces.
		const notes = document.querySelectorAll(".note");//variable that targets the element with class: #note
		for (const note of notes) {//for each note in notes
			note.style.backgroundColor = newColor;//the backgroundColor is newColor
		}
		colorInput.value = ""; // Clears the color input field after from submission.
		noteColor = newColor; // Updates the stored note color with the new selection.

		// TODO: Update the note color in the local storage.
		localStorage.setItem("noteColor", noteColor);//adds the noteColor and it's value to localStorage
	});

	newNoteButton.addEventListener("click", function () {//listens for a click
		addNewNote();//run the function addNewNote
	});
	document.addEventListener("dblclick", function (event)//listens for a double click
	{
		if (event.target.classList.contains("note"))//if the clicked element has the class: note
		{
			event.target.remove(); // Removes the clicked note.

			// TODO: Delete the note from the saved notes in the local storage.
			const id = Number(event.target.getAttribute("data-note-id"));//gets the attribute from that note as a interger
			const notes = readNotes();//notes equals to readNotes function

			for (let i = 0; i < notes.length; i++) {//while there is still notes in the length
				if (notes[i].id === id) {//if that note's id is equal to the id
					notes.splice(i, 1);//remove that 1 note
				}
			}
			saveNotes(notes);//function on notes to save the notes
		}
	});

	noteContainer.addEventListener("blur", function (event)//when there is a blur event
	{
		if (event.target.classList.contains("note")) {//if the classList has note;
			// TODO: Update the note from the saved notes in the local storage.
			const id = Number(event.target.getAttribute("data-note-id"));//set id to the attribute of that target's data-note-id;
			const notes = readNotes();//notes is equal to the function readNotes

			for (let i = 0; i < notes.length; i++) {//while there is still notes in the list
				if (notes[i].id === id) {//if the id in notes value is same as id
					notes[i].content = event.target.value;//the content of notes[i] is equal that target's value
				}
			}
			saveNotes(notes);//save that notes
		}
	});

	window.addEventListener("keydown", function (event)//when there is a keydown
	{
		/* Ignores key presses made for color and note content inputs. */
		if (event.target.id === "color-input" || event.target.type === "textarea") { //if event is equal to color-input or textarea
			return;//just return nothing
		}

		/* Adds a new note when the "n" key is pressed. */
		if (event.key === "n" || event.key === "N") {//if the n or N is pressed down
			addNewNote(); // Adds a new note.
		}
	});
});
