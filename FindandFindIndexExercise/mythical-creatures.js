const mythicalCreatures = [
  { name: "Dragon", type: "Fire", lastSeen: "Volcano Valley" },
  { name: "Mermaid", type: "Water", lastSeen: "Coral Caves" },
  { name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest" },
  { name: "Griffin", type: "Air", lastSeen: "Highwind Mountains" },
  { name: "Kraken", type: "Water", lastSeen: "Abyssal Depths" },
];

/* Tasks:
- Use the **`find`** method to locate the first creature of the "Water" type and log its name to the console.
- Use the **`findIndex`** method to locate the index of the "Griffin" in the mythical creatures array and log it to the console.
- Use the **`find`** method to locate the first creature last seen in "Enchanted Forest". 
*/

/* My Attempt..........*/

//Task 1:

const waterTypes = mythicalCreatures.find(function (waterCreature) {
  if (waterCreature.type === "Water") {
    return waterCreature.name;
  }
});

//Task 2:
const whereGriffin = mythicalCreatures.findIndex(function (griffinLocation) {
  if (griffinLocation.name === "Griffin") {
    return griffinLocation;
  }
});

//Task 3:

const enchantedForest = mythicalCreatures.find(function (lastSeen) {
  if (lastSeen.lastSeen === "Enchanted Forest") {
    return lastSeen.name;
  }
});

//Notes compared to Solution: I didn't need the if statements, could of been simpler and needed to console.log them too.
