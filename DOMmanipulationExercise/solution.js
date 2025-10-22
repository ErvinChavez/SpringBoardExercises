//In solution: Didn't create a variable for just the tasks
//Task 1: 
let task1 = document.getElementById('task1');
task1.innerText = "Changed using 'innerText'.";

//Task2:
let task2 = document.getElementById('task2');
task2.innerHTML = '<button type = "Submit" >Submit</button>'

//Task3: 
document.body.style = "background-color: rgb(35, 35, 35)"

//Task4:
let task4 = document.querySelectorAll('.item');
 for (let item of task4) {
    item.style.border = '1px white solid';
 }

 //Task5: 
 let task5 = document.getElementById('task5');
 task5.href = "https://www.springboard.com/"

 //Task6: 
let task6 = document.getElementById('task6');
task6.value = "DOM Master";

//Task7: 
let task7 = document.getElementById('task7');
task7.classList.add('new-class');

//Task8: 
let task8 = document.getElementById('task8');
task8.appendChild(document.createElement('button'));
//solution names the button: 
    //const newButton = document.createElement("button");
	//newButton.innerText = "New Button";
	//document.getElementById("task8").appendChild(newButton);

//Task9:
let task9 = document.getElementById('task9');//solution has: const task9Element = document.getElementById("task9");
task9.remove();//solution has: task9Element.parentNode.removeChild(task9Element);