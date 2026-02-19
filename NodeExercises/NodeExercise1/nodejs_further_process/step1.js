const fs = require('fs');
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}
cat(process.argv[2]);


//Other way to code it: 

// const fs = require('fs');

// function cat(path) {
//   try {
//     const contents = fs.readFileSync(path, 'utf8');
//     console.log(contents);
//   } catch (err) {
//     console.error(`Error reading ${path}:`);
//     console.error(err);
//     process.exit(1);
//   }
// }

// const path = process.argv[2];

// if (!path) {
//   console.error('Please provide a file path.');
//   process.exit(1);
// }

// cat(path);
