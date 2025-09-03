/* 
1. **Named Exports and Imports:** 
    Create an inventory management system for an online store, practicing the use of named exports and imports.
    - Implement `inventory.mjs`, exporting named functions: `addItem` that adds an item by name to the inventory array, `removeItem` that removes an item by name from the inventory array, `listItems` that logs all item names currently in the inventory.
    - Implement `storeManager.mjs` that imports the functions from `inventory.mjs` to demonstrate adding a few items, removing an item, and then listing the remaining items in the inventory.

2. **Default Export and Import:** Use default exports and imports by developing a blogging module.
    - Create `Post.mjs`, exporting a default `Post` class that includes a constructor for `title` and `content`, and a `publish` method that logs the title and content to the console.
    - Create `blog.mjs` that imports the `Post` class. Create an instance, and call the `publish` method to simulate posting.


3. **Re-exporting Modules:** Organize utility functions using re-exporting techniques to create a streamlined import process.
    - Create a `utils` directory. Within the utils directory, create individual modules: `stringUtils.mjs` for string manipulation functions and `numberUtils.mjs` for numeric operations that export various utility functions. Implement the `index.mjs`, which aggregates and re-exports all utility functions from the utils directory, facilitating a single point of import.
    - Create `app.mjs` that imports utilities from the aggregated `utils/index.mjs` and demonstrates their use.


4. **Dynamic Imports:** Utilize dynamic imports for conditionally loading modules for theme management based on time.
    - Create `theme.mjs`, which exports functions that manage the application's theme. The function `setLightTheme` and `setDarkTheme` set and log the theme being set to the console.
    - Create `app.js`. Implement an async function, `loadConfig,` that dynamically imports the `theme.mjs` and decides which theme function to call based on the current hour (e.g., light theme before 6 PM, dark theme afterward).


5. **Side Effects in Modules:** Create a module that automatically executes code upon import, demonstrating module side effects.
    - Develop `globalConfig.mjs` to log a message, simulating a global configuration setup.
    - Import `globalConfig.mjs` in `app.mjs` to observe the automatic execution of its side effects upon module load without needing to explicitly invoke any functions.*/

const inventory = [];

export function addItem(...itemName) {//I think i need to somehow place a spread variable here {
  //then loop through each and check if in the inventory list
  //if not then add to it;
  if (!inventory.includes(itemName)) {
    inventory.push(itemName);
  } //should make this into if statement, if not in array list, add it and inventory list and then return the list of inventory.
  return inventory;
}
//Problems to figure out:
//can only add item at a time, how to be able to place in multiple items at once



//  export function listItems(listOfItems) {
//   //this will list all the items in inventory by name
//   return listItems;
// }

// export function removeItem(itemName) {
//   //removes the items in the array by their name
// }

// //You would place "import" in a script inside the index.html page. "import {name of the exports here, separate by comma} from "name of the js file".
