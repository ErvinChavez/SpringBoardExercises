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

let categories = [];

async function jeopardyCategories() {
  const response = await axios.get(
    "https://projects.springboard.com/jeopardy/api/categories?count=100"
  );
  const data = response.data;
  console.log(data); //give me the data of all 100 categories(14 showed per page only)
  const random6 = _.sampleSize(data, 6); //this returns 6 random arrays of the data
  //console.log(random6[0].id); //gives me the id from the first array of categories
  categories.push(random6); //push the random 6 arrays to categories
}
jeopardyCategories();
console.log(categories); //and array of the 6 randoms now

//So now maybe a loop through categories, returning the titles of each??
while (categories.length > 0) {
  //NEED TO SOMEHOW return ARRAY of IDs Only!!
  let categoriesIds = categories[0].id;
  console.log(categoriesIds);
}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

//After selecting the random, somehow return there ids for each
//OR use their ids to get their info(title, clues)

function getCategoryIds() {}

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

function getCategory(catId) {}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable() {}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
