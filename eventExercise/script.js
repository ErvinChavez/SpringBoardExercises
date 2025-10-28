document.addEventListener("DOMContentLoaded", function () 
{
  const boxContainer = document.querySelector("#box-container"); //retrieves the box container
  const newButton = document.querySelector("#new-box-button"); //retrieves the new box button
  const colorInput = document.querySelector("input"); //retrieves the color input by the user
  const form = document.querySelector("#color-form"); //retrieves the form for the color input

  let boxColor = "black"; //the default color
  let boxCounter = 1; //first box created will be 1

  function addBox() {//the add box function
    const newDiv = document.createElement("div"); //make a new div
    newDiv.className = "box"; //the newDiv(new boxes) will have a class name of "box"
    newDiv.style.backgroundColor = boxColor; //make the background color of newDiv, the color of boxColor(default)
    newDiv.innerText = `Box ${boxCounter}`; //the text inside newDiv says Box {the box counter starting at 1}
    boxContainer.appendChild(newDiv); //make the newDiv a child of box-conatiner
    newDiv.dataset.id = boxCounter;//sets the id to that value
    boxCounter++; //add a 1 everytime there is a click
  }

  newButton.addEventListener("click", addBox);//uses the addBox() to create a new box after a click
    
  form.addEventListener("submit", function (e) {//everytime there is a submit on the color form
    e.preventDefault(); //prevent page from just reloading after submitting
    boxColor = colorInput.value; //set the boxColor now to the value of the color input
    colorInput.value = ""; //empty the input
  });
  
  document.addEventListener("dblclick", function(e){//listens for any double click on the whole document
    if (e.target.classList.contains("box")) {//if that target classList has the value "box"
      e.target.remove();//remove that target box
    }
  });

  document.addEventListener("mouseover", function(e) {//listens for the mouse to hover over
    if (e.target.classList.contains("box")) {//if mouse hovers over box
     e.target.innerText = (`${e.pageX} ${e.pageY}`)//set the innerText to the mouses X and Y values
    }
  });

  document.addEventListener("mouseout", function(e) {//listens for when the mouse moves out of the way
    if (e.target.classList.contains("box")) {//if mouse was on a box
      e.target.innerText = `Box ${e.target.dataset.id}`;//set the innerText to Box {the value of id for that box}
    }
  });

  document.addEventListener("keydown", function(e) {//listens for when the key is press
    if (e.target === colorInput) return; //if the n or N is pressed because of the input for color, ignore and return 

    if (e.key === "n" || e.key === "N") {//if the n or N is pressed 
      addBox();//create a new box
    }
  })
});
