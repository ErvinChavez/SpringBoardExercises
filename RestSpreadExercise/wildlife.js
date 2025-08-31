/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function animalSigthings(...animals) {
	console.log(animals);
} 
animalSigthings("Lion", "Tiger", "Elephant");

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];

// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.

const protectedAreas = [...forestHabitats, ...savannahHabitats];
console.log(protectedAreas);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.

const newRhinoStatus = {
	...rhinoStatus,
	population: 700,
	habitat: "desert" };

console.log(newRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.

const newAnimalProfile = {
	...lionProfile,
	genetic: "Diverse"
};

console.log(lionProfile);
console.log(newAnimalProfile);

/*
 * Observations:
 * TODO: Explain here. The newAnimalProfile has the same data as lionProfile except it has an added genetic: "Diverse". 
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.

const updatedEcosystemHealth = {...ecosystemHealth, foodSupply: {...ecosystemHealth.foodSupply, herbivores: "Insufficient"}};
console.log(ecosystemHealth);
console.log(updatedEcosystemHealth);

/*
 * Observations:
 * TODO: Explain here. Both ecosystemHealth and undatedEcosystemHealth keep the same data but updatedEcosystemHealth has an updated herbivores to "Insufficient"
 */
