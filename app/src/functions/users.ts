function getUsers() {
    fetch("http://localhost:3000/users")
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        showUsers(data);
    });
}

function showUsers(users) {

    return users.map((user) => {        

        let ul = document.createElement('ul')
        ul.setAttribute('class', 'ul-lists')

        
        let a = document.createElement('a')
        a.innerHTML = "Edit"
        a.setAttribute("onclick", "editUser(this)")
        a.setAttribute("id", user._id)
        a.setAttribute("href", "editUser.html")

        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteButton')
        deleteButton.innerHTML = "Delete"
        deleteButton.setAttribute("onclick", "deleteUser(this)")
        deleteButton.setAttribute("id", user._id)

        let name = document.createElement('li');
        let cpf = document.createElement('li');
        let birthDate = document.createElement('li');
        let email = document.createElement('li');
        let password = document.createElement('li');
        let address = document.createElement('li');
        let number = document.createElement('li');
        let complement = document.createElement('li');
        let city = document.createElement('li');
        let state = document.createElement('li');
        let country = document.createElement('li');
        let zipCode = document.createElement('li');

        name.innerHTML = `Nome: ${user.name}`;
        cpf.innerHTML = `CPF: ${user.cpf}`;
        birthDate.innerHTML = `Birth Date: ${user.birthDate}`;
        email.innerHTML = `Email: ${user.email}`;
        password.innerHTML = `Password: ${user.password}`;
        address.innerHTML = `Address: ${user.address}`;
        number.innerHTML = `Number: ${user.number}`;
        complement.innerHTML = `Complement: ${user.complement}`;
        city.innerHTML = `City: ${user.city}`;
        state.innerHTML = `State: ${user.state}`;
        country.innerHTML = `Country: ${user.country}`;
        zipCode.innerHTML = `Zip Code: ${user.zipCode}`;

        ul.appendChild(name);
        ul.appendChild(cpf);
        ul.appendChild(birthDate);
        ul.appendChild(email);
        ul.appendChild(password);
        ul.appendChild(address);
        ul.appendChild(number);
        ul.appendChild(complement);
        ul.appendChild(city);
        ul.appendChild(state);
        ul.appendChild(country);
        ul.appendChild(zipCode);
        ul.appendChild(a);
        ul.appendChild(deleteButton);

        document.querySelector('.div-informations')?.appendChild(ul);
    });    
}


function postUser() {
    const name = document.getElementById('inp-name')! as HTMLInputElement;
    const cpf = document.getElementById('inp-cpf')! as HTMLInputElement;
    const birthDate = document.getElementById('inp-birthdate')! as HTMLInputElement;
    const email = document.getElementById('inp-email')! as HTMLInputElement;
    const password = document.getElementById('inp-password')! as HTMLInputElement;
    const address = document.getElementById('inp-address')! as HTMLInputElement;
    const number = document.getElementById('inp-number')! as HTMLInputElement;
    const complement = document.getElementById('inp-complement')! as HTMLInputElement;
    const city = document.getElementById('inp-city')! as HTMLInputElement;
    const state = document.getElementById('inp-state')! as HTMLInputElement;
    const country = document.getElementById('inp-country')! as HTMLInputElement;
    const zipCode = document.getElementById('inp-zipcode')! as HTMLInputElement;

    let data = {
        name: `${name.value}`,
        cpf: `${cpf.value}`,
        birthDate: `${birthDate.value}`,
        email: `${email.value}`,
        password: `${password.value}`,
        address: `${address.value}`,
        number: `${number.value}`,
        complement: `${complement.value}`,
        city: `${city.value}`,
        state: `${state.value}`,
        country: `${country.value}`,
        zipCode: `${zipCode.value}`,
    }

    fetch("http://localhost:3000/users", {
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

function editUser(user) {
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: "GET"
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        populateInputUsers(data);
    });
}

function deleteUser(user) {
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: "DELETE"
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        console.log(json);
    })
}

function populateInputUsers(data) {
    const description = document.querySelector('#inp-description')! as HTMLInputElement;
    const date = document.querySelector('#inp-date')! as HTMLInputElement;
    const user = document.querySelector('.select-user')! as HTMLInputElement;

    description.value = data.description;
    date.value = data.date;
    user.value = data.user._id;
}