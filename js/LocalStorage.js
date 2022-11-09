import {ToDo} from "./ToDo.js";

let task1 = new ToDo("Mark", "do homework", "03.10.2002")
localStorage.setItem(task1.name, JSON.stringify(task1));
let task2 = new ToDo("Jacob", "do homework", "03.10.2002")
localStorage.setItem(task2.name, JSON.stringify(task2));

let div = document.getElementById("tasks");

//populate div
for (let i = 0; i < localStorage.length;i++){
    const node = document.createElement("li");
    const textNode = document.createTextNode(localStorage.getItem(localStorage.key(i)));
    node.appendChild(textNode);
    div.appendChild(node);
}

let submitBtn = document.getElementById("submit");

function addToDo() {
    console.log("button clickable")
    let name = document.getElementById("name").value;
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;

    let toDo = new ToDo(name, task, date);
    console.log(toDo.toString());

    localStorage.setItem(toDo.name, JSON.stringify(toDo));
}

submitBtn.addEventListener("click", addToDo)