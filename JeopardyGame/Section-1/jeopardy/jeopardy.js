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
  );
  const title = responseid.data.title;
  const clues = responseid.data.clues.slice(0, 5);

  const formattedClues = clues.map((clue) => {
    return {
      question: clue.question,
      answer: clue.answer,
      showing: null,
    };
  });
  return {
    title: title,
    clues: formattedClues,
  };
}
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

async function setupAndStart() {
  getCategoryIds() {
    return 
  }  
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO
