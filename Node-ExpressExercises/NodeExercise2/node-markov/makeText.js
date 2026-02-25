/** Command-line tool to generate Markov text. */

//Place in the imports required
const fs = require("fs");
const markov = require("./markov.js");
const axios = require("axios");
const process = require("process");

/** Make Markov machine from text and generate text from it. */

function generateText(text) {
  //uses the MarkovMachince function in the ./markov file
  let mm = new markov.MarkovMachine(text);
  //consoles the makeText function in ./markov file
  console.log(mm.makeText());
}

/** read file and generate text from it. */
//read the eegs.txt file here in makeText function
function makeText(path) {
  //path is the file eggs.txt
  //return in string form
  //function tells whats happens with an error or the data for eggs.txt
  fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      //if there is no error, it runs it with the generateText() function
      generateText(data);
    }
  });
}

/** read URL and make text from it. */
//when the "path" is a url (axios) instead not a file, run this
async function makeURLText(url) {
  //the url value for the data
  let resp;

  try {
    //await for the url data
    resp = await axios.get(url);
  } catch (err) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1);
  }
  //if there is no error, it runs it with the generateText() function
  generateText(resp.data);
}

/** interpret cmdline to decide what to do. */
//with process.argv, you can check it process.argv[2] is a url(axios) or a file  for the method
let [method, path] = process.argv.slice(2);

//if method is a file
if (method === "file") {
  //run makeText(path) with the file as the path
  makeText(path);
  //if it's a url(axios) instead
} else if (method === "url") {
  //run makeURLText with the file as a url(axios)
  makeURLText(path);
} else {
  //if anything else, return an error and exit.
  console.error(`Unknown method: ${method}`);
  process.exit(1);
}
