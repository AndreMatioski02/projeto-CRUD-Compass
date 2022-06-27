"use strict";
function getTasks() {
    fetch("http://localhost:3000/tasks")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        showTasks(data);
    });
}
function showTasks(tasks) {
    return tasks.map((task) => {
        var _a;
        let ul = document.createElement('ul');
        ul.setAttribute('class', 'ul-lists');
        let a = document.createElement('a');
        a.innerHTML = "Edit";
        a.setAttribute("onclick", "editTask(this)");
        a.setAttribute("id", task._id);
        // a.setAttribute("href", "editTask.html")
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("onclick", "deleteTask(this)");
        deleteButton.setAttribute("id", task._id);
        let description = document.createElement('li');
        let date = document.createElement('li');
        let user = document.createElement('li');
        description.innerHTML = `Description: ${task.description}`;
        date.innerHTML = `Date: ${task.date}`;
        user.innerHTML = `User: ${task.user}`;
        ul.appendChild(description);
        ul.appendChild(date);
        ul.appendChild(user);
        ul.appendChild(a);
        ul.appendChild(deleteButton);
        (_a = document.querySelector('.div-informations')) === null || _a === void 0 ? void 0 : _a.appendChild(ul);
    });
}
function postTask() {
    const description = document.getElementById('inp-description');
    const date = document.getElementById('inp-date');
    const user = document.getElementById('inp-user');
    let data = {
        description: `${description.value}`,
        date: `${date.value}`,
        user: `${user.value}`
    };
    fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function editTask(task) {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "GET"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        populateInputTasks(data);
    });
}
function deleteTask(task) {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "DELETE"
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (json) {
        console.log(json);
    });
}
function populateInputTasks(data) {
    const description = document.querySelector('#inp-description');
    const date = document.querySelector('#inp-date');
    const user = document.querySelector('.select-user');
    description.value = data.description;
    date.value = data.date;
    user.value = data.user._id;
}
function populateTasks() {
    const select = document.querySelector(".select-user");
    fetch("http://localhost:3000/users")
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.value = data[i]._id;
            option.text = data[i].name;
            select.appendChild(option);
        }
    });
}
