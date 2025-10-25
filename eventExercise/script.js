document.addEventListener("DOMContentLoaded", function () {
    //Task 1:
    const boxContainer = document.querySelector("#box-container");
    const newButton = document.querySelector("#new-box-button");
    const colorInput = document.querySelector("input");
    console.log(colorInput);
    
    let boxColor = "black";
    let boxCounter = 1;

    newButton.addEventListener("click", function() {
        const newDiv = document.createElement("div");
        boxContainer.appendChild(newDiv);
        newDiv.className = "box";
        newDiv.style.backgroundColor = boxColor;
        newDiv.innerText = `Box ${boxCounter}`;
        boxCounter++;
    });   
    
});