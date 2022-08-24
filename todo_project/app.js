"use strict";
let list = document.getElementById("list");
let todo_item = document.getElementById("todo");

function addtodo() {
    if (todo_item.value) {
        let li = document.createElement("li");
        let litext = document.createTextNode(todo_item.value);
        li.appendChild(litext)
        list.appendChild(li);
        li.classList.add("mylist")
        // delete btn
        let deletebtn = document.createElement("button");
        let deleteText = document.createTextNode("Delete");
        deletebtn.classList.add("btn")
        deletebtn.style.background = "red";
        deletebtn.style.color = "#fff";
        deletebtn.setAttribute("onclick", "mydelete(this)")
        deletebtn.appendChild(deleteText);
        li.appendChild(deletebtn);

        // edit text
        let editBtn = document.createElement("button");
        editBtn.classList.add("btn");
        editBtn.style.background = "blue";
        editBtn.style.color = "white";
        let edittext = document.createTextNode("Edit");
        editBtn.setAttribute("onclick", "editfun(this)")
        editBtn.appendChild(edittext)
        li.appendChild(editBtn)
     

        todo_item.value = "";
    } else {
        alert("Please create todo and then submit")
    }
}

function mydelete(e) {
    e.parentNode.remove()
}


function deleteall() {
    list.innerHTML = ""
}



function editfun(e) {
    let myedit = e.parentNode.firstChild.nodeValue;
    let editPrompt = prompt("Enter Your Edit Value", myedit);
    e.parentNode.firstChild.nodeValue = editPrompt
}


