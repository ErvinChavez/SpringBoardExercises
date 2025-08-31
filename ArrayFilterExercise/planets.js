const planets = [
  { name: "Mercury", temperature: 440, distance: 0.39 },
  { name: "Venus", temperature: 737, distance: 0.72 },
  { name: "Earth", temperature: 288, distance: 1 },
  { name: "Mars", temperature: 253, distance: 1.5 },
  { name: "Jupiter", temperature: 163, distance: 5.2 },
  { name: "Saturn", temperature: 133, distance: 9.58 },
  { name: "Uranus", temperature: 78, distance: 19.22 },
  { name: "Neptune", temperature: 73, distance: 30.05 },
];

//My Attempt................

//Temperature is betweem 253 K nad 323 K
const planetTemp = planets.filter(function (value) {
  if (value.temperature >= 253 && value.temperature <= 323) {
    console.log(value.name);
  }
});
//This distance from the sun is between 0.75 and 1.5AU
const distanceFromSun = planets.filter(function (value) {
  if (value.distance >= 0.75 && value.distance <= 1.5) {
    console.log(value.name);
  }
});

//Notes compared to Solution: I could have just combined both of them into one variable instead of making two separate ones.
