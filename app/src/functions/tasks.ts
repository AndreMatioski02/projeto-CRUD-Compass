function getTasks() {
    fetch("http://localhost:3000/tasks")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        showTasks(data);
    });
}

function showTasks(tasks) {

    return tasks.map((task) => {        

        let ul = document.createElement('ul')
        ul.setAttribute('class', 'ul-lists')

        let a = document.createElement('a')
        a.innerHTML = "Edit"
        a.setAttribute("onclick", "editUser(this)")
        a.setAttribute("id", task._id)
        a.setAttribute("href", "editUser.html")

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteButton')
        deleteButton.innerHTML = "Delete"
        deleteButton.setAttribute("onclick", "deleteTask(this)")
        deleteButton.setAttribute("id", task._id)

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

        document.querySelector('.div-informations')?.appendChild(ul);
    });    
}


function postTask() {
    const description = document.getElementById('inp-description')! as HTMLInputElement;
    const date = document.getElementById('inp-date')! as HTMLInputElement;
    const user = document.getElementById('inp-user')! as HTMLInputElement;

    let data = {
        description: `${description.value}`,
        date: `${date.value}`,
        user: `${user.value}`
    }

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
    })
}

function editTask(task) {
    const description = document.getElementById('inp-description')! as HTMLInputElement;
    const date = document.getElementById('inp-date')! as HTMLInputElement;
    const user = document.getElementById('inp-user')! as HTMLInputElement;


    fetch(`http://localhost:3000/users/${task.id}`, {
        method: "PUT"
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
    })
}

function deleteTask(task) {
    fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "DELETE"
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
    })
}
