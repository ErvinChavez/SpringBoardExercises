// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", setupAndStart);

let categories = []; //Need to push the catergories here of the random 6

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  const response = await axios.get(
    "https://projects.springboard.com/jeopardy/api/categories?count=100"
  ); //load the api for count 100
  const data = response.data; //target the data of the response[an array]
  const random6 = _.sampleSize(data, 6); //this returns 6 random from the data[an array]
  return random6.map((categ) => categ.id); //this returns the ids of each of the random categories[an array]

  /**what do i need next:
   * push to categories
   * be able to get title from categories
   * and be able to get the clues too
   */
}
/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
  const responseid = await axios.get(
    `https://projects.springboard.com/jeopardy/api/category?id=${catId}`
  ); //waits for the get(url)
  const title = responseid.data.title; //the title of the id
  const clues = responseid.data.clues.slice(0, 5); //the 5 clues of each id

  const formattedClues = clues.map((clue) => {
    //for each clue
    return {
      //format just clues like this in object
      question: clue.question, //the question of clue
      answer: clue.answer, //the answer of the clue
      showing: null, //show none
    };
  });
  return {
    //format the whole thing like this in object
    title: title, //title of id
    clues: formattedClues, //then the clues
  };
}
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  const thead = document.querySelector("#jeopardy thead"); //target thead of table
  const tbody = document.querySelector("#jeopardy tbody"); //target tbody of table

  // Clear old content
  thead.innerHTML = ""; //clears any existing rows
  tbody.innerHTML = ""; //clears any existing rows

  const headRow = document.createElement("tr"); //creates the header

  for (let cat of categories) {
    //for each cat (object) inside the categories array
    const th = document.createElement("th"); //create a th element
    th.innerText = cat.title; // using innerText to make text of th equal the title
    headRow.appendChild(th); //make th the child of the headRow
  }

  thead.appendChild(headRow); //make headRow the child of thead

  for (let i = 0; i < 5; i++) {
    //create 5 rows (1 for each clue in a category)
    const row = document.createElement("tr"); //create a tr element

    for (let j = 0; j < categories.length; j++) {
      //wloop thorught all 6 categories to create 6 cells in this row
      const cell = document.createElement("td"); //create a td element eqaul to cell
      cell.innerText = "?"; //th inner text of cell will be just start with a "?"

      cell.setAttribute("data-cat", j); //set the attribute data-cat(the catergory index) to j
      cell.setAttribute("data-clue", i); //set the attribute data-clue(the clue index inside that category) to i

      row.appendChild(cell); //add the cell as a child for row
    }

    tbody.appendChild(row); //then add the completed row as a child for tbody
  }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

// This function handles clicks on individual clue cells
function handleClick(evt) {
  const cell = evt.target; //the clicks on individual clue cells

  // Get category and clue indexes from data attributes
  const catIndex = Number(cell.getAttribute("data-cat"));
  const clueIndex = Number(cell.getAttribute("data-clue"));

  const clue = categories[catIndex].clues[clueIndex]; // the clue is here

  // Decide what to show based on the clue's current state
  if (clue.showing === null) {
    cell.innerText = clue.question; // show question
    clue.showing = "question";
  } else if (clue.showing === "question") {
    cell.innerText = clue.answer; // show answer
    clue.showing = "answer";
  }
  // if clue.showing === "answer", do nothing
}

// Attach the click handler to all td cells after filling the table
function attachClickHandlers() {
  const cells = document.querySelectorAll("#jeopardy td");
  cells.forEach((cell) => {
    cell.addEventListener("click", handleClick); //attach click handler to all cells
  });
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
  document.getElementById("jeopardy").style.display = "none";

  let loading = document.getElementById("loading");
  if (!loading) {
    // create the loading element if it doesn't exist
    loading = document.createElement("div");
    loading.id = "loading";
    loading.classList.add("spinner");
    document.body.insertBefore(loading, document.getElementById("jeopardy"));
  } else {
    loading.style.display = "block"; // show it if already exists
  }
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
  document.getElementById("jeopardy").style.display = "table";

  const loading = document.getElementById("loading");
  if (loading) {
    loading.style.display = "none"; // hide the loading message
  }
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
  categories = []; //reset

  showLoadingView(); //show the loading message

  const ids = await getCategoryIds(); //get 6 random IDs

  for (let id of ids) {
    const catData = await getCategory(id); //get the full category data
    categories.push(catData); //stores it
  }

  await fillTable(); //draw the board
  attachClickHandlers(); //make cells clickable

  hideLoadingView(); //hide loading message
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
