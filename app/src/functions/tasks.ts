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
        a.setAttribute("onclick", 'editTask(this); TaskModalStart()')
        a.setAttribute("id", task._id)
        a.classList.add('editButton')

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
        user.innerHTML = `User: ${task.user.name}`;

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
    const user = document.querySelector('.select-user')! as HTMLInputElement;

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
    fetch(`http://localhost:3000/tasks/${task.id}`, {
        method: "GET"
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        populateInputTasks(data);
    });
}

function putTasks() {
    const description = document.getElementById('inp-description-edit')! as HTMLInputElement;
    const date = document.getElementById('inp-date-edit')! as HTMLInputElement;
    const user = document.querySelector('.select-user-edit')! as HTMLInputElement;
    const inputHidden = document.querySelector('#id-task')! as HTMLInputElement;

    const idTask = inputHidden.value

    let dataEdit = {
        description: `${description.value}`,
        date: `${date.value}`,
        user: `${user.value}`
    }

    console.log(dataEdit)

    fetch(`http://localhost:3000/tasks/${idTask}`, {
        method: "PUT",
        body: JSON.stringify(dataEdit),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
    });

    window.location.reload();
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

function populateInputTasks(data) {
    const description = document.querySelector('#inp-description-edit')! as HTMLInputElement;
    const date = document.querySelector('#inp-date-edit')! as HTMLInputElement;
    const user = document.querySelector('.select-user-edit')! as HTMLInputElement;
    const inputHidden = document.querySelector('#id-task')! as HTMLInputElement;

    inputHidden!.setAttribute('value' ,data._id)

    description.value = data.description;
    date.value = data.date;
    user.value = data.user._id;    
}

function populateUsersToEdit() {
    const selectEdit = document.querySelector(".select-user-edit")! as HTMLElement;   

    fetch("http://localhost:3000/users")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {             
        let option;

        for(let i = 0; i<data.length; i++) {

            option = document.createElement('option')
            option.text = data[i].name;
            option.value = data[i]._id;

            selectEdit.appendChild(option);

        }
    });

}

function populateUsers() {
    const select = document.querySelector(".select-user")! as HTMLElement;   

    fetch("http://localhost:3000/users")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {             
        let option;

        for(let i = 0; i<data.length; i++) {

            option = document.createElement('option')
            option.text = data[i].name;
            option.value = data[i]._id;

            select.appendChild(option);

        }
    });

}


