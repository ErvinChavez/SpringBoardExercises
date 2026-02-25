// handleResponse.js
//node mudule to read/write files
const fs = require("fs");
//node module to work with file path
const path = require("path");

//the req express object
//the res express object
//operation is the name of the operation doing (mean, median, mode, all)
//result is the result of the chosen operation
function handleResponse(req, res, operation, result) {
  //response is the combine operation name with the result of it
  const response = { operation, ...result };

  // Check Accept header
  //use JSON if no accept header is present
  const accept = req.headers.accept || "application/json";

  // Save the response to file if query parameter save=true is in the query(url)
  if (req.query.save === "true") {
    //add a timestamp to track when operation was done
    const timestamped = { ...response, timestamp: new Date().toISOString() };

    //filePath is the file path for results.json
    //__dirname points to the current folder, ".." moves up one folder
    const filePath = path.join(__dirname, "..", "results.json");

    // Read existing results.json content, if it exists
    let allResults = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8").trim();
      if (content) {
        try {
          allResults = JSON.parse(content); // expects a JSON array
        } catch (err) {
          // If the file is corrupted, reset to empty array
          allResults = [];
        }
      }
    }

    // Add the new operation result to the array
    allResults.push(timestamped);

    // Write back the full array to results.json
    fs.writeFileSync(filePath, JSON.stringify(allResults, null, 2));
  }
  //determine how to send the response based on the Accept header
  if (accept.includes("text/html")) {
    //if client wants HTML, render the results EJS template
    //pass the response object to the template
    res.render("result", { response });
  } else {
    //otherwise, default to sending JSON
    res.json(response);
  }
}

// Export the function so it can be used in app.js
module.exports = handleResponse;
