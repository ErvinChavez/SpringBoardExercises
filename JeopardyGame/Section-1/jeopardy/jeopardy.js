// ### **Requirements**

// - The game board should be 6 categories across, 5 question down, displayed in a table. Above this should be a header row with the name of each category.
// - At the start of the game, you should randomly pick 6 categories from the jService API. For each category, you should randomly select 5 questions for that category.
// - Initially, the board should show with **?** on each spot on the board (on the real TV show, it shows dollar amount, but we won’t implement this).
// - When the user clicks on a clue **?**, it should replace that with the question text.
// - When the user clicks on a visible question on the board, it should change to the answer (if they click on a visible answer, nothing should happen)
// - When the user clicks the “Restart” button at the bottom of the page, it should load new categories and questions.



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

let categories = []; //Need to push the catergories here of the random 6 (6 categories across)

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

// Attach event listener ONCE
document.querySelector("#jeopardy tbody")
  .addEventListener("click", handleClick);


async function getCategoryIds() {
  const response = await axios.get(
    "https://projects.springboard.com/jeopardy/api/categories?count=100"
  ); //load the api for count 100
  const data = response.data; //target the data of the response[an array]
  const random6 = _.sampleSize(data, 6); //this returns 6 random from the data[an array]
  return random6.map((categ) => categ.id); //this returns the ids of each of the random categories[an array]
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
  try { 
  const responseid = await axios.get(
    `https://projects.springboard.com/jeopardy/api/category?id=${catId}`
  );

  const title = responseid.data.title;

  // Filter clues that have both question & answer
  const allClues = responseid.data.clues.filter(c => c.question && c.answer);

  // Ensure at least 5 valid clues
  if (allClues.length < 5) return null;

  // Pick 5 random clues
  const clues = _.sampleSize(allClues, 5);

  // Format each into the structure we want
  return {
    title: title,
    clues: clues.map(clue => ({
        question: clue.question,
        answer: clue.answer,
        showing: null
      }))
};
} catch (error) {
    return null;
}
};
/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {
  const thead = document.querySelector("#jeopardy thead");
  const tbody = document.querySelector("#jeopardy tbody");

  // Clear old content
  thead.innerHTML = "";
  tbody.innerHTML = "";

  const headRow = document.createElement("tr"); //creates the header row

  for (let cat of categories) {
    //for each cat (object) inside the categories array
    const th = document.createElement("th"); //create a th element(Header of table)
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

  if (cell.tagName !== "TD") return; //ignore header and misc clicks

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

//

async function setupAndStart() {
  categories = []; //reset
  showLoadingView(); //show the loading message

  while (categories.length < 6) {
    const ids = await getCategoryIds(); //get 6 random IDs

  for (let id of ids) {
    if (categories.length >= 6) break;

    const catData = await getCategory(id); //get the full category data
    if (catData) categories.push(catData);
    }
  }

  await fillTable(); //draw the board
  hideLoadingView(); //hide loading message
}