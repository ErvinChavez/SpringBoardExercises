document.addEventListener("DOMContentLoaded", function () {
  const boxContainer = document.querySelector("#box-container"); //the box container
  const newButton = document.querySelector("#new-box-button"); //the new box button
  const colorInput = document.querySelector("input"); //the color input by the user
  const form = document.querySelector("#color-form"); //the form for the color input

  let boxColor = "black"; //the default color
  let boxCounter = 1; //first box created will be 1

  newButton.addEventListener("click", function () {
    //everytime the new-box-button is clicked
    const newDiv = document.createElement("div"); //make a new div
    boxContainer.appendChild(newDiv); //make the newDiv a child of box-conatiner
    newDiv.className = "box"; //the newDiv will have a class name of "box"
    newDiv.style.backgroundColor = boxColor; //make the background color of newDiv, the color of boxColor(default)
    newDiv.innerText = `Box ${boxCounter}`; //the text inside newDiv says Box {the box counter starting at 1}
    boxCounter++; //add a 1 everytime there is a click
  });
  form.addEventListener("submit", function (e) {
    //everytime there is a submit on the color form
    e.preventDefault(); //prevent from loading any of the defaults
    boxColor = colorInput.value; //set the boxColor now to the value of the color input
    colorInput.value = ""; //colorInput starts as an empty string
  });
});
