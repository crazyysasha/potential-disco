import './style.css'

const form = document.querySelector('#createUserForm');

const output = document.querySelector('#output');


const users = [];

function writeOutput(value) {
    output.innerHTML += `<li> ${value} </li>`
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = event.target.elements.firstname.value;
    users.push(name);
    writeOutput(name);
    event.target.reset();
});

