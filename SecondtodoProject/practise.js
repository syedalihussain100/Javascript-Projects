"use strict"

let todo_input = document.getElementById("todo_input");
let description = document.getElementById("description");
let form = document.querySelector("form");
let container = document.querySelector(".container");

// logout
let logoutbtn = document.querySelector('#logoutbtn');


let todoarray = localStorage.getItem("todo") ?
    JSON.parse(localStorage.getItem("todo")) : []
    ;

todoShowTasks()


function RemoveExtraDom() {
    todoarray.forEach(() => {
        let div = document.querySelector(".text_container");
        div.remove()
    })
}


function todoShowTasks() {
    todoarray.forEach((value, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "text_container");
        let innerDiv = document.createElement("div");
        div.append(innerDiv);

        let p = document.createElement("p");
        p.innerText = value.title
        innerDiv.append(p);

        let span = document.createElement("span");
        span.innerText = value.description

        // create btn 

        let btn = document.createElement("button");
        btn.setAttribute("class", "delete_btn");
        btn.innerText = "-";
        div.append(btn);

        btn.addEventListener("click", () => {
            RemoveExtraDom()
            todoarray.splice(index, 1);
            localStorage.setItem("todo", JSON.stringify(todoarray))
            todoShowTasks()
            console.log(todoarray)
        })
        innerDiv.append(span)
        container.append(div)
    })
}



form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (todo_input.value && description.value) {
        RemoveExtraDom()
        todoarray.push({
            title: todo_input.value,
            description: description.value
        })

        localStorage.setItem("todo", JSON.stringify(todoarray))

        console.log(todoarray);
        todoShowTasks()

        todo_input.value = "";
        description.value = "";
    } else {
        alert("Please fill Todo Then Submit!")
    }
})


logoutbtn.addEventListener("click",function(){
    alert("Logout Sucessfully")
    window.location.href = "login.html"
})